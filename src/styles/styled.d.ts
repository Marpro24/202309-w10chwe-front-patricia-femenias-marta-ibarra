declare module "styled components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      accent: string;
      light: string;
      degraded: string;
    };
    typography: {
      mainFontFamily: string;
    };
  }
}
