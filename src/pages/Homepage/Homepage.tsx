import RobotCard from "../../components/RobotCard/RobotCard";
import { robocopMock } from "../../mocks/robotMock";
import HomepageStyled from "./Homepage.styled";

const Homepage = (): React.ReactElement => {
  return (
    <HomepageStyled>
      <h2 className="header__title">Killer Robots</h2>;
      <RobotCard robot={robocopMock} />
    </HomepageStyled>
  );
};

export default Homepage;
