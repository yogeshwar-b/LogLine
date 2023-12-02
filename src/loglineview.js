const vscode=require('vscode');
/**
 * @implements {vscode.WebviewViewProvider}
 */
class LogLineView{
	/**
	 * 
	 * 
	 */
	constructor(
	) { }

	/**
	 * 
	 * @param {vscode.WebviewView} webviewView 
	 * @param {vscode.WebviewViewResolveContext} context 
	 * @param {vscode.CancellationToken} _token 
	 */
	resolveWebviewView(
		webviewView,
		context ,
		_token ,
	) {
		this._view = webviewView;

		webviewView.webview.options = {
			// Allow scripts in the webview
			enableScripts: true,

			localResourceRoots: [
			]
		};

		webviewView.webview.html = this._getHtmlForWebview();
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
				const button = document.getElementById('myButton');
				button.addEventListener('click', () => {
					// Perform actions when the button is clicked
					// For example: send a message to the extension
					console.log('Congratulations, your extension "logline" is now active!');
				});
			</script>
		</body>
		</html>`;
	}
}

module.exports={
    LogLineView
}