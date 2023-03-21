import Logo from "../assets/img/cerve-hub-logo.svg";
import HelpIcon from "../assets/img/help-icon.svg";

function Header() {
  return (
    <div className="header__container">
      <img className="header__container_logoImg" src={Logo} alt="logo" />
      <a>
        <img className="header__container_HelpImg" src={HelpIcon} alt="help" />
      </a>
    </div>
  );
}

export default Header;
