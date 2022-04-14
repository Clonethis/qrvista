// import Box from "./Box";
// import { BiCycling } from "react-icons/bi";
import { MdOutlineLaptop, MdOutlineRestaurantMenu } from "react-icons/md";
// import { IoHomeOutline } from "react-icons/io5";

export default function TwoBoxen(props) {

    return (
        // <div className="page">

        <div className="four-box-dojebany">

            {/* <Box name="Týdenní menu" link={{ pathname:  color="#E71811" image={<IoHomeOutline />} />
            <Box name="Jídelní lístek" link={{ pathname: "https://www.vista-hotel.cz/cs/restaurace" }} target="_blank" color="#E71811" image={<MdOutlineRestaurantMenu />} /> */}
            <a className="box-link" href="https://www.vista-hotel.cz/en/restaurant" target="_blank">
                <div className="box-area">

                    <div className="box square shadow" style={{ backgroundColor: "#E71811" }}>
                        <div className="box-heading cssanimation fadeInBottom">
                            <div className="image">

                                <MdOutlineRestaurantMenu />
                            </div>

                        </div>
                    </div>
                    <div className="below-text">
                        Week menu
                    </div>
                </div>
            </a>
            {/* second box */}
            <a className="box-link" href="https://www.vista-hotel.cz/en/restaurant" target="_blank">
                <div className="box-area">

                    <div className="box square shadow" style={{ backgroundColor: "#E71811" }}>
                        <div className="box-heading cssanimation fadeInBottom">
                            <div className="image">

                                <MdOutlineRestaurantMenu />
                            </div>

                        </div>
                    </div>
                    <div className="below-text">
                        Food menu
                    </div>
                </div>
            </a>


            {/* <div className="divider"></div> */}

        </div>

    )
};