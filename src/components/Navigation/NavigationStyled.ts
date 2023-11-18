import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navigation {
    display: flex;
    justify-content: center;
    gap: 30px;
    font-size: 16px;
    color: #991e14;
    text-transform: uppercase;
    padding: 20px;
    margin: 20px;
  }

  .active {
    text-decoration: underline;
    color: #000;
  }
`;

export default NavigationStyled;
