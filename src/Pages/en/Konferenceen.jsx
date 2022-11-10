import Image from "../../elements/Image";
import Images from "../../elements/Images";
import OnlyLogoen from "../../elements/OnlyLogoen";
import Tabulkaen from "../../elements/Tabulkaen";
import image1 from "../../resources/images/content/konf3.jpg";
import image2 from "../../resources/images/content/konf4.jpg";
import image3 from "../../resources/images/content/konf5.jpg";
export default function Konferenceen(props) {
  return (
    <div className="page">
      <OnlyLogoen />
      <div className="content">
        <div className="text">
          <h1 className="css-animation fadeInBottom">Conference facilities</h1>

          <div className="padding">
            Hotel Vista has air-conditioned conference rooms. The Large
            conference hall, the Revista meeting room and 2 small lounges can be
            found on the ground floor of the hotel. The Large conference hall
            with a capacity of up to 100 people is ideal for conferences,
            banquets, product presentations and other occasions. It can be
            divided into two smaller meeting rooms, which are very well equipped
            from a technical point of view (quality sound system, microphone,
            Wi-Fi connection, screen, data projector, dimming). The Revista
            meeting room is suitable for up to 50 people in a school setting.
          </div>

          <Images name={image1} name2={image2} />
          <Tabulkaen />
          <h2>Business area</h2>

          <div className="paragraph">
            We will be happy to provide you with the following:
          </div>
          <ul className="basic-ul">
            <li className="list-item">
              Meeting apartment is an ideal place for small private meetings or
              interviews
            </li>
            <li className="list-item">
              There is a computer with internet connection in the hotel lobby,
              which you can use for your needs at any time
            </li>
            <li className="list-item">
              At the reception, we will be happy to print or scan any necessary
              documents for a fee
            </li>
          </ul>
        </div>
      </div>
      <Image name={image3} />
    </div>
  );
}
