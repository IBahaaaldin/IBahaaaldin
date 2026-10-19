const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const repos = [
  { folder: '05-studio-media-navbar', name: 'navbar-studio-media' },
  { folder: '06-dev-toolbar-navbar', name: 'navbar-dev-toolbar' },
  { folder: '07-fluid-mega-menu-navbar', name: 'navbar-fluid-mega-menu' },
  { folder: '08-visionos-glass-navbar', name: 'navbar-visionos-glass' }
];

const root = path.resolve(__dirname, '..');

for (const { folder, name } of repos) {
  const folderPath = path.join(root, 'navbars', folder);
  const tempGitDir = path.join(root, '.temp-sync-' + name);
  
  if (fs.existsSync(tempGitDir)) {
    fs.rmSync(tempGitDir, { recursive: true, force: true });
  }
  fs.mkdirSync(tempGitDir);

  // Copy all files from folder to tempGitDir
  const files = fs.readdirSync(folderPath);
  for (const file of files) {
    if (file.startsWith('.temp') || file === 'temp-record' || file === '.git') continue;
    fs.cpSync(path.join(folderPath, file), path.join(tempGitDir, file), { recursive: true });
  }

  console.log(`Syncing ${folder} -> IBahaaaldin/${name}...`);
  try {
    execSync('git init -b main', { cwd: tempGitDir, stdio: 'pipe' });
    execSync('git config user.name "Bahaa Mohammed"', { cwd: tempGitDir, stdio: 'pipe' });
    execSync('git config user.email "bahaam.coding@gmail.com"', { cwd: tempGitDir, stdio: 'pipe' });
    execSync('git add .', { cwd: tempGitDir, stdio: 'pipe' });
    execSync(`git commit -m "style: standardize navbar dimensions and refresh visual screenshot assets"`, { cwd: tempGitDir, stdio: 'pipe' });
    execSync(`git remote add origin https://github.com/IBahaaaldin/${name}.git`, { cwd: tempGitDir, stdio: 'pipe' });
    execSync('git push -u origin main --force', { cwd: tempGitDir, stdio: 'inherit' });
    console.log(`✅ Successfully synced IBahaaaldin/${name}`);
  } catch (err) {
    console.error(`❌ Error syncing ${name}:`, err.message);
  } finally {
    try {
      fs.rmSync(tempGitDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 500 });
    } catch (e) {}
  }
}
