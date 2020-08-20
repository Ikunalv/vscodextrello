// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { getTrelloTokenCmd } from "./trello/getTrelloToken";
import { createTrelloCardCmd } from "./trello/createTrelloCard";
import { setTrelloTokenCmd } from "./trello/setTrelloToken";
//import * as controller from "./controller.js";
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const disposableCommands = [
    vscode.commands.registerCommand(
      "VSCodeXTrello.pinTODOs",
      createTrelloCardCmd
    ),
    vscode.commands.registerCommand(
      "VSCodeXTrello.authorizeTrello",
      getTrelloTokenCmd
    ),
    vscode.commands.registerCommand(
      "VSCodeXTrello.setTrelloToken",
      setTrelloTokenCmd
    ),
  ];
  disposableCommands.forEach((disposable) =>
    context.subscriptions.push(disposable)
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
