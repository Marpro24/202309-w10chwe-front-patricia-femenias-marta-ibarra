import { RobotStructure } from "../../store/features/robots/types";

interface RobotCardProps {
  robot: RobotStructure;
}

const RobotCard = ({
  robot: { name, movie, speed, endurance, image },
}: RobotCardProps): React.ReactElement => {
  return (
    <article>
      <div>
        <img src={image} alt={name} width="300" height="300" />
        <h2>{name}</h2>
        <dl>
          <dt>Movie:</dt>
          <dd>{movie}</dd>
          <dt>Speed:</dt>
          <dd>{speed}</dd>
          <dt>Endurance:</dt>
          <dd>{endurance}</dd>
        </dl>
      </div>
    </article>
  );
};

export default RobotCard;
