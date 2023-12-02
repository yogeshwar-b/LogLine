// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {



	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "logline" is now active!');
	let disposable = vscode.commands.registerCommand('logline.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from LogLine!');
	});

	const webview1provdier=new HelloWorldViewProvider()
	let testdisposable=vscode.window.registerWebviewViewProvider("uniqueViewId",webview1provdier);
	context.subscriptions.push(disposable);
	context.subscriptions.push(testdisposable);


}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}



/**
 * @implements {vscode.WebviewViewProvider}
 */
class HelloWorldViewProvider{
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