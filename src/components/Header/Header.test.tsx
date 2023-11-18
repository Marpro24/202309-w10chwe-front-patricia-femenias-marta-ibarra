import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Killer Robots logo", () => {
      const expectedAltText = "Killer Robots logo";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Header />
          </ThemeProvider>
        </BrowserRouter>,
      );
      const headerLogo = screen.getByAltText(expectedAltText);

      expect(headerLogo).toBeInTheDocument();
    });
  });
});
