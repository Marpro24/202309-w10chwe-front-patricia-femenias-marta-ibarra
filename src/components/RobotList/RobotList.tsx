import RobotCard from "../RobotCard/RobotCard";
import RobotCardStyled from "../RobotCard/RobotCardStyled";
import robotsMock from "../../mock/robotsMock";

const RobotsList = (): React.ReactElement => {
  const robots = robotsMock;

  return (
    <RobotCardStyled>
      {robots.map((robot) => (
        <li key={robot._id}>
          <RobotCard robot={robot} />
        </li>
      ))}
    </RobotCardStyled>
  );
};

export default RobotsList;
