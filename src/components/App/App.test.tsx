import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";
import App from "./App";
import mainTheme from "../../styles/mainTheme";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Killer Robots' inside", () => {
      const expectedTitle = "Killer Robots";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it renders a header", () => {
    test("Then it should show a Killer Robots logo", () => {
      const expectedAltText = "Killer Robots logo";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const headerLogo = screen.getByAltText(expectedAltText);

      expect(headerLogo).toBeInTheDocument();
    });
  });
});
