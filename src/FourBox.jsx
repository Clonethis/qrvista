import Box from "./Box"
import {BiCycling} from "react-icons/bi";
import {MdOutlineLaptop, MdOutlineRestaurantMenu} from "react-icons/md";
import {IoHomeOutline} from "react-icons/io5";

export default function FourBox(props){
  return(
    <div className="page">

      <div className="four-box-dojebany">
      
      <Box name="Volný čas" link="/volnycas" color="#12664F" image={<BiCycling/>}/>
      <Box name="Restaurace" link="/restaurace" color="#242F40" image={<MdOutlineRestaurantMenu/>}/>
      <Box name="Hotel" link="/hotel"color="#a17971" image={<IoHomeOutline/>}/>
      <Box name="Konference" link="/konference"color="#55383c" image={<MdOutlineLaptop/>}/>
      {/* {/* <Box name="first"/> */}
      {/* <Box name="second"/>
      <Box name="third"/>
      <Box name="fourth"/> */}
      </div>
    </div>
  )
};