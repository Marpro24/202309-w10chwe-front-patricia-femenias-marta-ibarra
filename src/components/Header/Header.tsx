import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <div className="logo-container">
        <img
          className="header-logo"
          src="/images/logo.webp"
          alt="Killer Robots logo"
          width="400"
          height="4302"
        />
        <Navigation />
      </div>
    </HeaderStyled>
  );
};

export default Header;
