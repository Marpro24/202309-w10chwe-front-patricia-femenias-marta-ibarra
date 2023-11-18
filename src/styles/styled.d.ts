declare module "styled components" {
  export interface DefaultTheme {
    color: {
      mainColor: string;
      secondaryColor: string;
      mainFontColor: string;
      secondaryFontColor: string;
    };
    typography: {
      mainFontFamily: string;
    };
  }
}
