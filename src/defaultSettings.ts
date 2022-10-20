export interface GeneralObject {
  [index: string]: string | number | boolean | GeneralObject;
}

export const defaultSettings = {
   "editor.defaultFormatter": "esbenp.prettier-vscode" ,
   "editor.formatOnSave": true ,
}
