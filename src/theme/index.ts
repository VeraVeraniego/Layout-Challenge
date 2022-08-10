import { createGlobalStyle } from "styled-components";
type Palette = Record<string, string>;

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
	* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
	html{
		font-size: 10px;
    line-height: 12px;
		font-weight: 400;
		font-family: 'Roboto', sans-serif;
	}
	h1, h2, h3, h4, h5, p, span {
		font-style: normal;
	}
	p, span {
		letter-spacing: .75px
	}
`;

const palette: Palette = {
  darkblue: "#343951",
  orange: "#ff9f00",
  darkgray: "#858A9D",
  gray: "#bcbeca",
  bglightgray: "#f5f6fc",
  blue: "#689ff8",
  green: "#4ac29d",
  inactive: "#c4c4c4",
};
export default palette;
