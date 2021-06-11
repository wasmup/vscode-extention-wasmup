// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "wasmup" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	context.subscriptions.push(vscode.commands.registerCommand('wasmup.removeEmptyLines', () => {
		// The code you place here will be executed every time your command is executed

		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			return; // No open text editor
		}
		let selection = editor.selection;
		let text = editor.document.getText(selection);

		newText = text.replace(/^\s*$(?:\r\n?|\n)/gm, "");

		editor.edit(edit => edit.replace(selection, newText));

		// const cp = require('child_process')
		// cp.exec('remove-empty-lines', (err, stdout, stderr) => {
		// 	console.log('stdout: ' + stdout);
		// 	console.log('stderr: ' + stderr);
		// 	if (err) {
		// 		console.log('error: ' + err);
		// 	}
		// });

		// Display a message box to the user
		// vscode.window.showInformationMessage(text);
	}));

	context.subscriptions.push(vscode.commands.registerCommand('wasmup.removeSpace', () => {
		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			return; // No open text editor
		}
		let selection = editor.selection;
		let text = editor.document.getText(selection);
		newText = text.replace(/[ \t]+/g, '');
		editor.edit(edit => edit.replace(selection, newText));
	}));

	context.subscriptions.push(vscode.commands.registerCommand('wasmup.sort', () => {
		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			return; // No open text editor
		}
		let selection = editor.selection;
		let text = editor.document.getText(selection);
		let lines = text.match(/[^\r\n]+/g);
		lines.sort((a, b) => { return a.localeCompare(b); });
		let newText = lines.join('\n');
		editor.edit(edit => edit.replace(selection, newText));
	}));

}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
