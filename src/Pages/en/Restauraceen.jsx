
import OnlyLogoen from "../../elements/OnlyLogoen";
import Images from "../../elements/Images";
import photo from "../../resources/images/content/food4.jpg";
import photo2 from "../../resources/images/content/food5.jpg";
import TwoBoxen from "../../elements/TwoBoxen";
export default function Restauraceen(props) {
  return (
    <div className="page">
      <OnlyLogoen />
      <div className="content">
        <div className="text">
          <h1 className="cssanimation fadeInBottom">
            Restaurant
          </h1>
          <div className="paragraph">

            In the pleasant atmosphere of the Vista hotel restaurant, we prepare breakfast, lunch, dinner or catering for conference events.

          </div>



          <div className="paragraph">We serve breakfast for guests, but also for non-accommodated guests in the restaurant from <div className="strong">7am to 10am.</div></div>
          <div className="paragraph">We offer a lunch menu from <div className="strong">11am till 2pm</div> in the restaurant, which consists of soup and several main courses. You can find the daily menu on our website in the restaurant section - weekly menu.</div>
          <div className="paragraph">The restaurant is open daily for our guests <div className="strong">from 11am till 10pm</div>. Throughout the day you can choose dishes from our menu.</div>
          <div className="paragraph">Alternatively, you can use the Room service. You can order by telephone in your room. Just call No. 94 and place your order with staff in the restaurant from <div className="strong">12pm to 10:30pm.</div></div>
          <div className="paragraph">You will find the menu at the bottom of this document: <a href="https://www.vista-hotel.cz/files/2021/10/962d7f3df4ab86fef915cd9c82d33535.pdf">Vista Restaurant menu</a></div>

          <div className="paragraph">

            We did not forget about our little ones in the hotel. Part of the common area of the hotel restaurant is a children's play zone, where children can have fun during your stay.
          </div>




          <h2>

            Catering services
          </h2>
          <div className="paragraph">

            We offer our catering services in your chosen premises in Brno and the surrounding area. Our sales department will prepare an assortment offer according to your requirements.
          </div>
          <div className="paragraph">

            Contact email:  <a href="mailto:akce@vista-hotel.cz">akce@vista-hotel.cz</a>
          </div>

        </div>
      </div>
      <TwoBoxen />
      <Images name={photo} name2={photo2} />
    </div>
  );
}
