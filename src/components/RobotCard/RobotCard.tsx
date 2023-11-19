import { RobotStructure } from "../../store/features/robots/types";
import RobotCardStyled from "./RobotCardStyled";

interface RobotCardProps {
  robot: RobotStructure;
}

const RobotCard = ({
  robot: { name, movie, speed, endurance, image },
}: RobotCardProps): React.ReactElement => {
  return (
    <RobotCardStyled>
      <div className="robot-card__data">
        <img
          className="robot-card__image"
          src={image}
          alt={name}
          width="300"
          height="300"
        />
        <h2 className="robot-card__name">{name}</h2>
        <dl className="robot-card__info-container">
          <dt className="robot-card__title-info">⚙Movie⚙</dt>
          <dd className="robot-card__info">{movie}</dd>
          <dt className="robot-card__title-info">⚙Speed⚙</dt>
          <dd className="robot-card__info">{speed}</dd>
          <dt className="robot-card__title-info">⚙Endurance⚙</dt>
          <dd className="robot-card__info">{endurance}</dd>
        </dl>
      </div>
    </RobotCardStyled>
  );
};

export default RobotCard;
