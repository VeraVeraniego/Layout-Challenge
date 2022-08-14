import React from "react";
import { Palette } from "../../theme";
export interface IFile {
  color: keyof Palette;
  name: string;
  members: number;
  lastModified: string;
}
export const FileRow = ({ color, name, members, lastModified }: IFile) => {
  return <div>RecentFiles</div>;
};
