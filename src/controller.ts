import * as vscode from 'vscode';


function showMessage() {
  vscode.window.showInformationMessage("Hello World from VSCodeXTrello!");
}

export function getComments() {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    vscode.window.showErrorMessage("There is no open Text Editor!");
    return;
  }

  const doc = editor.document;
  const text = doc.getText();
  var words = ["todo", "TODO", "ToDo"];
  var regex = new RegExp("\\b(?:" + words.join("|") + ")\\b", "gi");
  console.log("File:" + doc.fileName);
  text.split("\n").map((codeLine, index) => {
    if (regex.test(codeLine)) {
      console.log(
        "Found " + codeLine.trim() + " on line number " + (index + 1)
      );
    }
  });
}

