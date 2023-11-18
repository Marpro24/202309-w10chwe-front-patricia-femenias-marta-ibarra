import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navigation {
    display: flex;
    justify-content: center;
    gap: 30px;
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.main};
    text-transform: uppercase;
    padding: 20px;
    margin: 20px;
  }

  .active {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export default NavigationStyled;
