import styled from "styled-components";

const RobotCardStyled = styled.article`
  text-align: center;
  margin: 20px;
  margin-top: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-top: 40px;
  box-shadow: 0 0 25px ${({ theme }) => theme.colors.accent};
  font-size: 16px;

  .robot-card {
    &__data {
      flex-direction: column;
      align-items: center;
      margin: 0;
    }

    &__name {
      color: ${({ theme }) => theme.colors.accent};
      text-transform: uppercase;
      margin: 20px;
      font-size: 25px;
    }

    &__info-container {
      display: flex;
      flex-direction: column;
      grid-gap: 5px;
      align-items: flex-start;
      justify-items: start;
      align-items: center;
    }

    &__title-info {
      font-weight: bold;
      text-transform: uppercase;
      color: #7b7170;
    }

    &__info {
      color: ${({ theme }) => theme.colors.light};
      margin-left: 0;
      margin-bottom: 5px;
    }

    &__image {
      object-fit: contain;
      margin-bottom: 20px;
    }

    @media (min-width: 820px) {
      width: 100%;
      height: auto;
    }
  }
`;

export default RobotCardStyled;
