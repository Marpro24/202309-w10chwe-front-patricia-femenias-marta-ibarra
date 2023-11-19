import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RobotCard from "../../components/RobotCard/RobotCard";
import { robocopMock } from "../../mocks/robotMock";
import HomepageStyled from "./Homepage.styled";
import useRobotsApi from "../../components/Header/hooks/useRobotsApi/useRobotsApi";
import { loadRobotsActionCreator } from "../../store/features/robots/robotsSlice";

const Homepage = (): React.ReactElement => {
  const { getRobotsApi } = useRobotsApi();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const currentRobots = await getRobotsApi();
      dispatch(loadRobotsActionCreator(currentRobots));
    })();
  }, [dispatch, getRobotsApi]);

  return (
    <HomepageStyled>
      <h2 className="header__title">Killer Robots</h2>;
      <RobotCard robot={robocopMock} />
    </HomepageStyled>
  );
};

export default Homepage;
