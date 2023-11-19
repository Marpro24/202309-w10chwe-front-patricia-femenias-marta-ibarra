import RobotCard from "../../components/RobotCard/RobotCard";
import { robotMock } from "../../components/RobotCard/robotMock";
import HomepageStyled from "./Homepage.styled";

const Homepage = (): React.ReactElement => {
  return (
    <HomepageStyled>
      <h2 className="header__title">Killer Robots</h2>;
      <RobotCard robot={robotMock} />
    </HomepageStyled>
  );
};

export default Homepage;
