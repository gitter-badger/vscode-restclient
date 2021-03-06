'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { ExtensionContext, commands, languages } from 'vscode';
import { RequestController } from './controllers/requestController'
import { HistoryController } from './controllers/historyController'
import { HttpCompletionItemProvider } from './httpCompletionItemProvider'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "rest-client" is now active!');

    let requestController = new RequestController();
    let historyController = new HistoryController();
    context.subscriptions.push(requestController);
    context.subscriptions.push(historyController);
    context.subscriptions.push(commands.registerCommand('rest-client.request', () => requestController.run()));
    context.subscriptions.push(commands.registerCommand('rest-client.history', () => historyController.run()));
    context.subscriptions.push(languages.registerCompletionItemProvider('http', new HttpCompletionItemProvider()));
}

// this method is called when your extension is deactivated
export function deactivate() {
}