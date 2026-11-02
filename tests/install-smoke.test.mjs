import assert from 'node:assert/strict';
import { cpSync, mkdirSync, mkdtempSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { verifyInstallation } from './install-smoke.mjs';

function fixture(t, link = 'references/guide.md') {
  const parent = realpathSync(tmpdir());
  const root = mkdtempSync(join(parent, 'context builder validation '));
  t.after(() => {
    assert.equal(dirname(root), parent);
    assert.ok(root.startsWith(join(parent, 'context builder validation ')));
    rmSync(root, { recursive: true, force: true });
  });
  const source = join(root, 'source checkout');
  const installed = join(root, 'installed skill');
  mkdirSync(join(source, 'references'), { recursive: true });
  writeFileSync(join(source, 'SKILL.md'), `---\nname: context-builder\ndescription: Test fixture\n---\n[Guide](${link})\n`);
  writeFileSync(join(source, 'references/guide.md'), '# Guide\n');
  cpSync(source, installed, { recursive: true });
  return { source, installed };
}

test('accepts matching copies in paths with spaces', (t) => {
  const { source, installed } = fixture(t);
  assert.equal(verifyInstallation(source, installed), 2);
});

test('rejects an omitted installed file', (t) => {
  const { source, installed } = fixture(t);
  rmSync(join(installed, 'references/guide.md'));
  assert.throws(() => verifyInstallation(source, installed), /Installed file set differs/);
});

test('rejects an altered installed file', (t) => {
  const { source, installed } = fixture(t);
  writeFileSync(join(installed, 'references/guide.md'), '# Altered\n');
  assert.throws(() => verifyInstallation(source, installed), /Installed file differs: references\/guide.md/);
});

test('rejects an unexpected repository file', (t) => {
  const { source, installed } = fixture(t);
  writeFileSync(join(installed, 'README.md'), 'Unexpected\n');
  assert.throws(() => verifyInstallation(source, installed), /Installed file set differs/);
});

test('rejects a broken relative link even when both copies match', (t) => {
  const { source, installed } = fixture(t, 'references/missing.md#heading');
  assert.throws(() => verifyInstallation(source, installed), /Broken bundled link/);
});

test('rejects a link outside the bundled skill', (t) => {
  const { source, installed } = fixture(t, '../outside.md');
  assert.throws(() => verifyInstallation(source, installed), /Link leaves the skill/);
});

test('accepts relative links with encoded spaces and fragments', (t) => {
  const { source, installed } = fixture(t, 'references/guide%20with%20spaces.md#heading');
  for (const root of [source, installed]) {
    writeFileSync(join(root, 'references/guide with spaces.md'), '# Heading\n');
  }
  assert.equal(verifyInstallation(source, installed), 3);
});
