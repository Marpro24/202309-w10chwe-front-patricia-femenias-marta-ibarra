import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given a Navigation component", () => {
  describe("When it renders", () => {
    test("Then it should show a link with the text 'home'", () => {
      const expectedHomeLink = "home";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Navigation />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const homeLink = screen.getByRole("link", { name: expectedHomeLink });

      expect(homeLink).toBeInTheDocument();
    });
  });

  describe("When it renders", () => {
    test("Then it should show a link with the text 'create'", () => {
      const expectedCreateLink = "create";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Navigation />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const createLink = screen.getByRole("link", { name: expectedCreateLink });

      expect(createLink).toBeInTheDocument();
    });
  });
});
