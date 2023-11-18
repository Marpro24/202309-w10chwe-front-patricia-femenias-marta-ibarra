import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .logo-container {
    background: linear-gradient(to right, #e1281c, #c1b5b4, #e1281c);
    display: inline-block;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .header-logo {
    object-fit: cover;
    margin-bottom: 20px;
    width: 360px;
    height: 220px;
    padding-top: 20px;
  }

  @media (min-width: 820px) {
    .header-logo {
      width: 400px;
    }
  }
`;

export default HeaderStyled;
