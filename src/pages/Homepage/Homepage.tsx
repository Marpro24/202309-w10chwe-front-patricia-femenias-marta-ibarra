import RobotCard from "../../components/RobotCard/RobotCard";
<<<<<<< Updated upstream
import { robocopMock } from "../../mocks/robotMock";
=======
import RobotsList from "../../components/RobotList/RobotList";
import { robotMock } from "../../mock/robotMock";
>>>>>>> Stashed changes
import HomepageStyled from "./Homepage.styled";

const Homepage = (): React.ReactElement => {
  return (
    <HomepageStyled>
      <h2 className="header__title">Killer Robots</h2>;
<<<<<<< Updated upstream
      <RobotCard robot={robocopMock} />
=======
      <RobotCard robot={robotMock} />
      <RobotsList />
>>>>>>> Stashed changes
    </HomepageStyled>
  );
};

export default Homepage;
