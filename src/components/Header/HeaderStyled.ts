import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.degraded}
  );

  .header-logo {
    object-fit: cover;
    margin-bottom: 20px;
    width: 308px;
    height: 288px;
    padding-top: 20px;
  }
`;

export default HeaderStyled;
