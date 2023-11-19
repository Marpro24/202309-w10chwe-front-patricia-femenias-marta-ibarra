import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        className="header-logo"
        src="/images/logo.webp"
        alt="Killer Robots logo"
        width="308"
        height="288"
      />
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
