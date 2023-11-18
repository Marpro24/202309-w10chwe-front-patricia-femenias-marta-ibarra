import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Killer Robots' inside", () => {
      const expectedTitle = "Killer Robots";

      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );

      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
