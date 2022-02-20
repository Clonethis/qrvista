import FourBox from "../elements/FourBox";
import Textos from "../elements/Textos";
// import Header from "../elements/Header"
import OnlyLogo from "../elements/OnlyLogo";
export default function Home(){
  return(
      <div className="page">
        <OnlyLogo/>
            <Textos/>
            <FourBox/>
      </div>
  );
};
