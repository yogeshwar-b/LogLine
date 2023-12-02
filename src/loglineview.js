const vscode = require("vscode");

/**
 * @implements {vscode.WebviewViewProvider}
 */
class LogLineView {
  /**
   *
   *
   */
  constructor() {}

  /**
   *
   * @param {vscode.WebviewView} webviewView
   * @param {vscode.WebviewViewResolveContext} context
   * @param {vscode.CancellationToken} _token
   */
  resolveWebviewView(webviewView, context, _token) {
    this._view = webviewView;

    webviewView.webview.options = {
      // Allow scripts in the webview
      enableScripts: true,

      localResourceRoots: [],
    };

    webviewView.webview.html = this._getHtmlForWebview();
    var count = 0;
    // Handle messages from the webview
    webviewView.webview.onDidReceiveMessage((message) => {
      switch (message.command) {
        case "alert":
          vscode.window.showInformationMessage(message.text + count);
          return;
      }
    }, undefined);
  }

  /**
   *
   *@returns {string}
   */
  _getHtmlForWebview() {
    return `
		<html>
		<body>
			<h1>HELLO WORLD THIS IS ACTIVITY BAR!</h1>
			<button id="myButton">Random Button</button>
			<script>
        const vscode = acquireVsCodeApi();
				const button = document.getElementById('myButton');
				button.addEventListener('click', () => {
          vscode.postMessage({command: "alert", text: "RANDOM BUTTON PRESSED!"});    
				});
			</script>
		</body>
		</html>`;
  }
}

module.exports = {
  LogLineView,
};
