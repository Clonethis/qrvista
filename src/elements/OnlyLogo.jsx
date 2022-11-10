import { Link } from "react-router-dom";
import logo from "../resources/images/logovistawhite.svg";

export default function OnlyLogo(props) {
  return (
    <>
      <Link to="/">
        <div className="main-logo-large">
          <img src={logo} className="logo-large" alt="Vista logo" />
        </div>
      </Link>
      <div className="text" id="cz">
        <Link to="/en">EN</Link>
      </div>
    </>
  );
}
