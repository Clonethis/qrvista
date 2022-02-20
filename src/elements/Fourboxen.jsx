import Box from "./Box"
// const 
// export default function FourBoxen(props){
//   return(
//       <div className="four-box">
      
//       <Box name="Leisure" link="/volnycas-en"/>
//       <Box name="Restaurant" link="/restaurace-en"/>
//       <Box name="Hotel" link="/hotel-en"/>
//       <Box name="Conference" link="/konference-en"/>
//       {/* {/* <Box name="first"/> */}
//       {/* <Box name="second"/>
//       <Box name="third"/>
//       <Box name="fourth"/> */}
//       </div>
//   )
// };

import {BiCycling} from "react-icons/bi";
import {MdOutlineLaptop, MdOutlineRestaurantMenu} from "react-icons/md";
import {IoHomeOutline} from "react-icons/io5";

export default function FourBoxen(props){
  return(
    // <div className="page÷

      <div className="four-box-dojebany">
      
      <Box name="Hotel" link="/hotel-en"color="#E71811" image={<IoHomeOutline/>}/>
      <Box name="Restaurant" link="/restaurace-en" color="#DE8745" image={<MdOutlineRestaurantMenu/>}/>
      <div className="divider"></div>
      <Box name="Conference" link="/konference-en"color="#55383c" image={<MdOutlineLaptop/>}/>
      <Box name="Leisure" link="/volnycas-en" color="#BF9576" image={<BiCycling/>}/>
      {/* {/* <Box name="first"/> */}
      {/* <Box name="second"/>
      <Box name="third"/>
      <Box name="fourth"/> */}
      </div>
    // </div>
  )
};