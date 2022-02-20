
import OnlyLogoen from "../../elements/OnlyLogoen";
import Image from "../../elements/Image";
import photo from "../../resources/images/content/hotel1.jpg"
export default function Hoteleen(props) {
  return(
      <div className="page">
          <OnlyLogoen/>
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
              <div className="paragraph">
              <ul className="basic-ul">

    <li className="list-item1">Standard room</li>
    <li className="list-item1">Business room</li>
    <li className="list-item1">Deluxe room</li>
    <li className="list-item1">Apartment Standard</li>
    <li className="list-item1">Apartment Business</li>
    <li className="list-item1">Apartment Deluxe</li>
              </ul>

              </div>
<div className="paragraph">

<div className="paragraph"><div className="strong">Standard </div>rooms are always equipped with 2 separate beds, LED TV with Czech and foreign channels, telephone, Wi-Fi connection. Of course there is a private bathroom with shower, including sanitary facilities.</div>
<div className="paragraph">Compared to the Standard rooms, the <div className="strong">Business</div> rooms are additionally equipped with air conditioning, a coffee set with a selection of coffee and teas and natural cosmetics.</div>
<div className="paragraph"><div className="strong">Deluxe</div> rooms have the same equipment as Business rooms, but in addition, they have a Julius Meinl capsule coffee machine, natural organic cosmetics for even greater comfort of our guests.</div>
</div>

<div className="paragraph">

The apartments (41 m2) consist of two parts: first part is the bedroom with LED TV with Czech and foreign channels, second part includes an equipped kitchen with a dining table and a living area with a sofa bed. The apartment has a bathroom (with shower or bath) and a toilet. As well as the rooms, there are Standard, Business or Deluxe apartments.
</div>
<div className="paragraph">

You can also use modern apartments for a long-term accommodation, or they can be a great choice for families with children.
</div>

<h2>

Telephone and Internet
</h2>
<div className="paragraph">

  When calling from room to room, dial the number of the required room and confirm with the SEND button on the phone.
  We offer free wireless internet access (Wi-Fi) in all rooms and other public areas of the hotel. No password is required for the connection.
</div>

<h2>

Safety instructions
</h2>
<div className="paragraph">

In case of a fire or an emergency, please remain calm and follow the evacuation plan.
</div>
<ul>

 <li>Leave the room immediately.</li>
 <li>Go down the marked escape routes. (The diagram is located on the door of the room.)</li>
 <li>Do not use elevators.</li>
 <li>Go to the evacuation site.</li>
 <li>Follow the instructions of the hotel staff.</li>
</ul>
<div className="paragraph">

If you cannot leave the room: 
</div>
<ul>

<li>Call the reception immediately.</li>
<li>Stay in place and wait for the intervention of professional rescuers. </li>
</ul>



            </div>
          </div>
          <Image name={photo}/>
      </div>
  );
}
