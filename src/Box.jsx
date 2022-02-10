import { Link } from "react-router-dom"
export default function Box(props){
    return(
        // can use navlink "<Navlink activeClassName="active" to ="/about""...
<Link to={props.link}>
<div className="box-area">

    <div className="box square" style={{backgroundColor:props.color}}>
        <div className="box-heading cssanimation fadeInBottom">
            <div className="image">

                {props.image}
            </div>
            
        </div>
    </div>
    <div className="below-text">

                {props.name}
    </div>
</div>
</Link>
    )
};