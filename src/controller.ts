/* import * as vscode from 'vscode';
import * as path from 'path';

export class CommentsProvider implements vscode.TreeDataProvider<Comment>{

    onDidChangeTreeData?: vscode.Event<void | Comment | null | undefined> | undefined;
    getTreeItem(element: Comment): vscode.TreeItem  {
       return element;
    }
    getChildren(element?: Comment | undefined): Thenable<Comment[]> {


        return Promise.resolve([]);
    }
    
}



private getComments():Comment[] {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    vscode.window.showErrorMessage("There is no open Text Editor!");
    return;
  }
  var comments=[];
  const doc = editor.document;
  const text = doc.getText();
  var words = ["todo", "TODO", "ToDo"];
  var regex = new RegExp("\\b(?:" + words.join("|") + ")\\b", "gi");
  console.log("File:" + doc.fileName);
  text.split("\n").map((codeLine, index) => {
    if (regex.test(codeLine)) {
         var task = new Task(codeLine,String(index+1));
         comments.push(task);
      console.log(
        "Found " + codeLine.trim() + " on line number " + (index + 1)
      );
    }
  });
  if (comments.length>0) return comments.map();
  else
  return [];
}

class Task{
    taskName:string;
    lineNumber:string;
    constructor(taskName:string, lineNumber:string){
       this.taskName = taskName;
       this.lineNumber =lineNumber;
    }

    getTaskName(){
        return this.taskName;
    }

    getLineNumber(){
        return this.lineNumber;
    }
}

class Comment extends vscode.TreeItem{
    constructor(
        public readonly label: string,
        private version: string,
        public readonly collapsibleState: vscode.TreeItemCollapsibleState
      ) {
        super(label, collapsibleState);
      }

      get tooltip(): string {
        return `${this.label}-${this.version}`;
      }
    
      get description(): string {
        return this.version;
      }
    
      iconPath = {
        light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
        dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg')
      };
    }


 */
