all:
	mkdir ~/.vscode/extensions/wasmup-0.0.1/
	cp extension.js	~/.vscode/extensions/wasmup-0.0.1/
	cp jsconfig.json	~/.vscode/extensions/wasmup-0.0.1/
	cp node_modules	~/.vscode/extensions/wasmup-0.0.1/
	cp package.json	~/.vscode/extensions/wasmup-0.0.1/
	cp package-lock.json	~/.vscode/extensions/wasmup-0.0.1/
	cp README.md	~/.vscode/extensions/wasmup-0.0.1/
	cp vsc-extension-quickstart.md	~/.vscode/extensions/wasmup-0.0.1/
	cp -R node_modules/  ~/.vscode/extensions/wasmup-0.0.1/node_modules/

init:
# https://code.visualstudio.com/api/get-started/your-first-extension
	npm install -g yo generator-code
	yo code
# https://code.visualstudio.com/api/working-with-extensions/publishing-extension
# npm install -g vsce
# https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions	
# vsce --help
# vsce package --help 
# vsce publish minor
# vsce package -o wasmup-0.0.1.vsix
# code --install-extension wasmup-0.0.1.vsix

# cp -R ./  ~/.vscode/extensions/wasmup-0.0.1/

