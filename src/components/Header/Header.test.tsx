import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Killer Robots logo", () => {
      const expectedAltText = "Killer Robots logo";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );
      const headerLogo = screen.getByAltText(expectedAltText);

      expect(headerLogo).toBeInTheDocument();
    });
  });
});
