import { RobotStructure } from "../store/features/robots/types";

export const robocopMock: RobotStructure = {
  _id: "39urfio3",
  name: "Robocop",
  movie: "Robocop",
  speed: 3,
  endurance: 44,
  image: "https://i.ibb.co/SJJ4yrs/robocop.webp",
};

export const robotsApiMock: RobotStructure[] = [
  {
    _id: "6557e6dca6c3542b49fb2c2e",
    name: "Cyborg",
    movie: "Doctor Who",
    speed: 6,
    endurance: 7,
    image: "https://i.ibb.co/cgjghR1/cyborg.webp",
  },
  {
    _id: "6557e719a6c3542b49fb2c30",
    name: "Terminator",
    movie: "Terminator",
    speed: 10,
    endurance: 10,
    image: "https://i.ibb.co/M6n7qN2/terminator.webp",
  },
  {
    _id: "6557e78da6c3542b49fb2c31",
    name: "RoboCop",
    movie: "Robocop",
    speed: 9,
    endurance: 8,
    image: "https://i.ibb.co/SJJ4yrs/robocop.webp",
  },
];
