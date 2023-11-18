import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";

describe("Given a Homepage component", () => {
  describe("When it receives a heading with the title Killer Robots", () => {
    test("Then it should show a heading with the title Killer Robots", () => {
      const expectedTitle = "Killer Robots";

      render(
        <BrowserRouter>
          <Homepage />
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
