import "./index.css";
import logo from "../../assets/image/logo.png";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <img src={logo} className="logo" alt="" />
        <div className="links">
          <span className="icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#protfolio">Portfolio</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
