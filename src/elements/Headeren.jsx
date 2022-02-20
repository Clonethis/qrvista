// import { Children } from "react/cjs/react.production.min";
import React,{useState} from "react";

import logo from "../../resources/images/logovistagray.png";
import { Link } from "react-router-dom";

function  Headeren(){

    // const[languege,setLanguage]=useState("1");
    return(

        <div className="header ">
            <Link to="/en">
            <div className="main-logo"><img src={logo} className="logo" alt="Vista logo" /></div>
            </Link>
            
                <ul>
                    <li className="menu-link"><Link to="/restaurace-en">Restaurant</Link></li>
                    <li className="menu-link"><Link to="/hotel-en">Hotel</Link></li>
                    <li className="menu-link"><Link to="/volnycas-en">Leisure</Link></li>
                    <li className="menu-link"><Link to="/konference-en">Conference</Link></li>
                </ul>     
                <div className="text" id="en">

<Link to="/">CZ</Link>
</div>
        </div>
    )

    
}
function Decider(){
    
}
export default Headeren;