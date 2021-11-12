import { spawn, spawnSync, execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';

if (existsSync('static')) {
	execSync('rm -rf static')
}

mkdirSync('static')
execSync('cp -r public/* static')

const serve = spawn('npm', ['start']);

serve.stdout.on('data', data => {
	if (data.toString().match(/3000/)) {
		spawnSync('wget', ['-P', 'static/', '-nH', '--html-extension', '-e', 'robots=off', '-r', 'localhost:3000']);
		console.log('Done');
		if (serve.kill()) {
			process.exit(0)
		}
	}
})