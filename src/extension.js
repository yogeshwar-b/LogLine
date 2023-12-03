const vscode = require("vscode");
const loglineview1 = require("./loglineview");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const webview1provdier = new loglineview1.LogLineView();
  let disposable = vscode.window.registerWebviewViewProvider(
    "loglineSearch",
    webview1provdier
  );
  let disposable2 = vscode.window.registerWebviewViewProvider(
    "loglineResults",
    webview1provdier
  );
  context.subscriptions.push(disposable);
  context.subscriptions.push(disposable2);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
