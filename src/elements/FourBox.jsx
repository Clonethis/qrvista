import Box from "./Box"
import {BiCycling} from "react-icons/bi";
import {MdOutlineLaptop, MdOutlineRestaurantMenu} from "react-icons/md";
import {IoHomeOutline} from "react-icons/io5";

export default function FourBox(props){
  return(
    // <div className="page">

      <div className="four-box-dojebany">
      
      <Box name="Hotel" link="/hotel"color="#E71811" image={<IoHomeOutline/>}/>
      <Box name="Restaurace" link="/restaurace" color="#DE8745" image={<MdOutlineRestaurantMenu/>}/>
      <div className="divider"></div>
      <Box name="Konference" link="/konference"color="#55383c" image={<MdOutlineLaptop/>}/>
      <Box name="Volný čas" link="/volnycas" color="#BF9576" image={<BiCycling/>}/>
      {/* {/* <Box name="first"/> */}
      {/* <Box name="second"/>
      <Box name="third"/>
      <Box name="fourth"/> */}
      </div>
    // </div>
  )
};