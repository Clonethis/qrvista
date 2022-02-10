import Headeren from "./Headeren";

export default function Hoteleen(props) {
  return(
      <div className="page">
          <Headeren/>
          <div className="content">
            <div className="text">
            <h1 className="cssanimation fadeInBottom">
              Hotel information
              </h1>
              <div className="paragraph">

4 * hotel in a quiet part of Brno, just a short distance to the city centre, this is Hotel Vista Brno. The hotel is located in the Medlánky district and is a 13-minute tram ride from the busy city centre. It is very easily accessible from the city road ring and further to the D1, D2 motorways. The hotel has its own parking lot with a limited capacity, which is completely free of charge for our clients.
We offer several room categories for accommodation which you can choose from. We have standard, business or apartment rooms.
              </div>
              <h2>

Composition of the rooms
              </h2>
              <ul className="basic-ul">

    <li className="list-item">Standard room</li>
    <li className="list-item">Business room</li>
    <li className="list-item">Deluxe room</li>
    <li className="list-item">Apartment Standard</li>
    <li className="list-item">Apartment Business</li>
    <li className="list-item">Apartment Deluxe</li>
              </ul>
<div className="paragraph">

Standard rooms are always equipped with 2 separate beds, LED TV with Czech and foreign channels, telephone, Wi-Fi connection. Of course there is a private bathroom with shower, including sanitary facilities.
Compared to the Standard rooms, the Business rooms are additionally equipped with air conditioning, a coffee set with a selection of coffee and teas and natural cosmetics.
Deluxe rooms have the same equipment as Business rooms, but in addition, they have a Julius Meinl capsule coffee machine, natural organic cosmetics for even greater comfort of our guests.
</div>

<div className="paragraph">

The apartments (41 m2) consist of two parts: first part is the bedroom with LED TV with Czech and foreign channels, second part includes an equipped kitchen with a dining table and a living area with a sofa bed. The apartment has a bathroom (with shower or bath) and a toilet. As well as the rooms, there are Standard, Business or Deluxe apartments.
</div>
<div className="paragraph">

You can also use modern apartments for a long-term accommodation, or they can be a great choice for families with children.
</div>

            </div>
          </div>
      </div>
  );
}
