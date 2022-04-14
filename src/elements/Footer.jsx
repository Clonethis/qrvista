import { AiFillPhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
export default function Footera(props) {
  return (
    <div className="footer center">
      <h2>Vista Hotel</h2>
      {/* <p className="sideway"> -  HotelVista</p> */}
      <div className="contacts center">
        <div className="contact">
          {/* <div className="icon footer-icon"> */}
          <a href="tel:+420 734 523 956">
            <div className="icon footer-icon">
              <AiFillPhone />
            </div>
            {/* </a> */}
            {/* </div> */}
            {/* <a href="+420 734 523 956"> */}

            734 523 956  </a>
          {/* <div className="address">123</div> */}
        </div>
        <div className="contact">
          <a href="mailto:recepce@vista-hotel.cz">
            <div className="icon footer-icon">
              <GrMail />
            </div>
            recepce@vista-hotel.cz
          </a>
        </div>
      </div>
      <div className="end-content">
        <a href="https://www.evolutionmarketing.cz/">

          Created by Evolutionmarketing
        </a>
      </div>
    </div>
  );
}
