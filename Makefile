all:

install:
# https://code.visualstudio.com/api/working-with-extensions/publishing-extension
	npm install -g vsce
# https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions	
	vsce --help
	vsce package --help 
	vsce publish minor
	vsce package -o wasmup-0.0.1.vsix
	code --install-extension wasmup-0.0.1.vsix

	cp -R ./  ~/.vscode/extensions/wasmup-0.0.1/



init:
# https://code.visualstudio.com/api/get-started/your-first-extension
	npm install -g yo generator-code
	yo code