import FourBox from "../FourBox";
import Textos from "./Textos";
import Header from "../Header"
import OnlyLogo from "../OnlyLogo";
export default function Home(){
  return(
      <div className="page">
        <OnlyLogo/>
            <Textos/>
            <FourBox/>
      </div>
  );
};
