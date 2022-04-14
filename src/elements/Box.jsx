import { Link } from "react-router-dom";
import {
    useState,
    useEffect
} from "react";
export default function Box(props) {

    // const [value, setValue] = useState(1);

    // useEffect(() => {

    //     // console.log("rerender");
    // }, [value]);
    function clicked() {
        window.scrollTo(0, 0);
        // console.log("Ihasbenn clicked")
        // setValue(() => value + 1);
    }
    return (
        // can use navlink "<Navlink activeClassName="active" to ="/about""...
        <Link className="box-link" onClick={clicked} to={props.link} target={props.target}>
            <div className="box-area">

                <div className="box square shadow" style={{ backgroundColor: props.color }}>
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