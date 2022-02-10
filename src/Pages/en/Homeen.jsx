import Headeren from "./Headeren";
import FourBoxen from "./Fourboxen";
import Textosen from "./Textosen";

export default function Homeen(props) {
  return(
      <div className="page">
        <Headeren/>
        <FourBoxen/>
        <Textosen/>
      </div>
  );
}

