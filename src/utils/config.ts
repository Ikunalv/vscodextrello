import { WorkspaceConfiguration } from "vscode";

export interface Configuration extends WorkspaceConfiguration {
  trelloToken?: string;
}
