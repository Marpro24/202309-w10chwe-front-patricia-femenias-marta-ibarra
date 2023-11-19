import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";
import RobotCard from "./RobotCard";
import { robocopMock } from "../../mocks/robotMock";

describe("Given a RobotCard component", () => {
  describe("When it receives a Robocop robot", () => {
    test("Then it should Robocop picture", () => {
      const expectedAltText = robocopMock.name;

      render(
        <ThemeProvider theme={mainTheme}>
          <RobotCard robot={robocopMock} />
        </ThemeProvider>,
      );
      const pictureImage = screen.getByAltText(expectedAltText);

      expect(pictureImage).toBeInTheDocument();
    });
  });

  describe("When it receives Robocop's data", () => {
    test("Then it should show Robocop into a heading", () => {
      const robocop = robocopMock;

      render(
        <ThemeProvider theme={mainTheme}>
          <RobotCard robot={robocop} />
        </ThemeProvider>,
      );
      const characterName = screen.getByRole("heading", {
        name: robocop.name,
      });

      expect(characterName).toBeInTheDocument();
    });
  });
});
