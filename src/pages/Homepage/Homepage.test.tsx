import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given a Homepage component", () => {
  describe("When it receives a heading with the title Killer Robots", () => {
    test("Then it should show a heading with the title Killer Robots", () => {
      const expectedTitle = "Killer Robots";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Homepage />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
