import logo from "./resources/images/logovistawhite.svg";
import { Link } from "react-router-dom";

export default function OnlyLogo(props) {
  return(
    <Link to="/">
    <div className="main-logo-large"><img src={logo} className="logo-large" alt="Vista logo" /></div>
    </Link>
  );
}
