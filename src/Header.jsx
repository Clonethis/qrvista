// import { Children } from "react/cjs/react.production.min";
import logo from "./resources/images/logovistagray.png";
import { Link } from "react-router-dom";
export default function Header(){
    return(
        <div className="header">
            <Link to="/">
            <div className="main-logo"><img src={logo} className="logo" alt="Vista logo" /></div>
            </Link>
            
                <ul>
                    <li className="menu-link"><Link to="/restaurace">Restaurace</Link></li>
                    <li className="menu-link"><Link to="/hotel">Hotel</Link></li>
                    <li className="menu-link"><Link to="/volnycas">Volný čas</Link></li>
                    <li className="menu-link"><Link to="/konference">Konference</Link></li>
                </ul>     
        <div className="text" id="cz">

   <Link to="/en">EN</Link>
   </div>
            
        </div>
    )
}