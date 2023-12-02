
const vscode = require('vscode');
const loglineview1= require('./loglineview');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const webview1provdier=new loglineview1.LogLineView()
	let testdisposable=vscode.window.registerWebviewViewProvider("loglineview",webview1provdier);
	context.subscriptions.push(testdisposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}


