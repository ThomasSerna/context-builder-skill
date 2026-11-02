import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import {
  cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync,
  realpathSync, rmSync, writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

function readFiles(root, prefix = '') {
  const files = new Map();
  for (const entry of readdirSync(join(root, prefix), { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const name = prefix ? `${prefix}/${entry.name}` : entry.name;
    assert.ok(!entry.isSymbolicLink(), `Expected a copied file, found a symlink: ${name}`);
    if (entry.isDirectory()) {
      for (const item of readFiles(root, name)) files.set(...item);
    } else {
      assert.ok(entry.isFile(), `Unsupported package entry: ${name}`);
      files.set(name, readFileSync(join(root, name)));
    }
  }
  return files;
}

function checkLinks(root, files) {
  for (const [name, bytes] of files) {
    if (!name.endsWith('.md')) continue;
    const markdown = bytes.toString('utf8').replace(/^```[^\n]*\n[\s\S]*?^```[^\n]*$/gm, '');
    // shortcut: checks inline links used by this skill; add reference-style parsing if introduced.
    for (const match of markdown.matchAll(/\[[^\]]*\]\(\s*(<[^>]+>|[^\s)]+)(?:\s+["'][^"']*["'])?\s*\)/g)) {
      const target = match[1].replace(/^<|>$/g, '');
      if (/^(?:[a-z][a-z\d+.-]*:|#|\/\/)/i.test(target) && !isAbsolute(target)) continue;
      const path = decodeURIComponent(target.split(/[?#]/, 1)[0]);
      if (!path) continue;
      const destination = relative(root, resolve(root, dirname(name), path));
      assert.ok(!isAbsolute(destination) && destination !== '..' && !destination.startsWith(`..${sep}`), `Link leaves the skill: ${name} -> ${target}`);
      assert.ok(files.has(destination.split(sep).join('/')), `Broken bundled link: ${name} -> ${target}`);
    }
  }
}

export function verifyInstallation(source, installed) {
  const expected = readFiles(source);
  const actual = readFiles(installed);
  assert.ok(expected.has('SKILL.md'), 'Source skill is missing SKILL.md');
  assert.deepEqual([...actual.keys()], [...expected.keys()], `Installed file set differs: ${installed}`);
  for (const [name, bytes] of expected) {
    assert.ok(bytes.equals(actual.get(name)), `Installed file differs: ${name}`);
  }
  checkLinks(installed, actual);
  return actual.size;
}

function runSmoke() {
  const repository = fileURLToPath(new URL('../', import.meta.url));
  const source = join(repository, 'skills/context-builder');
  const originalFiles = readFiles(source);
  const temporaryParent = realpathSync(tmpdir());
  const temporaryRoot = mkdtempSync(join(temporaryParent, 'context builder install '));
  try {
    const fixture = join(temporaryRoot, 'source checkout');
    const fixtureSkill = join(fixture, 'skills/context-builder');
    cpSync(source, fixtureSkill, { recursive: true });
    writeFileSync(join(fixture, 'README.md'), 'Repository-only file: do not install.\n');
    const project = join(temporaryRoot, 'target project');
    mkdirSync(project);

    const windows = process.platform === 'win32';
    const npxCli = join(dirname(process.execPath), 'node_modules/npm/bin/npx-cli.js');
    if (windows) assert.ok(existsSync(npxCli), `Cannot find npm's npx CLI: ${npxCli}`);
    const result = spawnSync(windows ? process.execPath : 'npx', [
      ...(windows ? [npxCli] : []),
      '--yes', 'skills@1.7.5', 'add', fixture,
      '--skill', 'context-builder', '--agent', 'codex', 'claude-code', '--copy', '--yes',
    ], {
      cwd: project,
      env: {
        ...process.env,
        DISABLE_TELEMETRY: '1',
        XDG_STATE_HOME: join(temporaryRoot, 'state'),
        npm_config_cache: join(temporaryRoot, 'npm cache'),
        CI: 'true',
      },
      stdio: ['ignore', 'pipe', 'pipe'],
      encoding: 'utf8',
      timeout: 120_000,
      windowsHide: true,
    });
    if (result.error) throw result.error;
    assert.equal(result.status, 0, `skills@1.7.5 failed:\n${result.stdout}\n${result.stderr}`);

    for (const [agent, directory] of [['Codex', '.agents'], ['Claude Code', '.claude']]) {
      const count = verifyInstallation(source, join(project, directory, 'skills/context-builder'));
      console.log(`${agent}: ${count} files match the checkout; bundled links resolve.`);
    }
    assert.deepEqual(readFiles(source), originalFiles, 'Installation changed the source skill');
    assert.ok(existsSync(join(project, 'skills-lock.json')), 'Project lockfile was not created in the isolated project');
    console.log('skills@1.7.5 installation passed (copy mode, isolated project and state, paths with spaces).');
  } finally {
    assert.equal(dirname(temporaryRoot), temporaryParent, 'Refusing to remove a directory outside the temporary parent');
    assert.ok(temporaryRoot.startsWith(join(temporaryParent, 'context builder install ')), 'Refusing to remove an unowned temporary directory');
    rmSync(temporaryRoot, { recursive: true, force: true });
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    runSmoke();
  } catch (error) {
    console.error(`Installation smoke test failed: ${error.message}`);
    process.exitCode = 1;
  }
}
