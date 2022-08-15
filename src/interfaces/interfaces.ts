import { Palette } from "../theme";

export interface IFolderData {
  title: string;
  subfolders: number;
  date: string;
}

export interface ISharedFolders {
  title: string;
  date: string;
  circles: Array<keyof Palette>;
}
