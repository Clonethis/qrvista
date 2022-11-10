import { Link } from "react-router-dom";
import logo from "../resources/images/logovistawhite.svg";

export default function OnlyLogoen(props) {
  return (
    <>
      <Link to="/en">
        <div className="main-logo-large">
          <img src={logo} className="logo-large" alt="Vista logo" />
        </div>
      </Link>
      <div className="text" id="en">
        <Link to="/">CZ</Link>
      </div>
    </>
  );
}
