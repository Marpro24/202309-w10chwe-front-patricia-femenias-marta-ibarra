import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";
import { robotMock } from "./robotMock";
import RobotCard from "./RobotCard";

describe("Given a RobotCard component", () => {
  describe("When it receives a Robocop robot", () => {
    test("Then it should Robocop picture", () => {
      const expectedAltText = robotMock.name;

      render(
        <ThemeProvider theme={mainTheme}>
          <RobotCard robot={robotMock} />
        </ThemeProvider>,
      );
      const pictureImage = screen.getByAltText(expectedAltText);

      expect(pictureImage).toBeInTheDocument();
    });
  });

  describe("When it receives Robocop's data", () => {
    test("Then it should show Robocop into a heading", () => {
      const robocop = robotMock;

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
