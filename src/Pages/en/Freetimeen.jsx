

import OnlyLogoen from "../../elements/OnlyLogoen";
import Image from "../../elements/Image";
import photo from "../../resources/images/content/free5.jpg"

export default function Freetimeen(props) {
  return(
      <div className="page">
        <OnlyLogoen/>
        <div className="content">
          <div className="text">
            <h1 className="cssanimation fadeInBottom">

          Entertainment and leisure at the hotel
            </h1>
            <div className="paragraph">

The hotel has a Finnish sauna for a fee with a capacity of maximum 8 people. The space includes a rest room, outdoor cooling area and a bucket of cold water.
Contact reception for more information and reservations: no.99
            </div>

            Brno is a city of fairs, but the Moravian metropolis also offers a lot of historical monuments, cultural events and activities for children. You can visit a lot of interesting places and natural beauties in the city itself and its surroundings.
<ul className="basic-ul">

<li className="list-item">Tour of Brno and its surroundings – Špilberk castle, labyrinth under the Zelný trh square, Old Town Hall, Villa Tugendhat – UNESCO World Heritage Site, Brno‘s dam, Pernštejn castle, Veveří castle, Austerlitz battlefield, monasteries Předklášteří, Rajhrad, Dolní Kounice, the Protected landscape area Pálava and Moravian Krast, Macocha Abyss.</li>
<li className="list-item">Families with children can use the services of our partners – BRuNO Family park -  children can enjoy more than 40 attractions here, such as bumper cars, sea with boats, 38 meters long water slide and much more. For the youngest children (up to 4 years old) there is a playroom Mláďata. Or</li>
<li className="list-item">A visit to the Brno Zoo, which has more than 400 animal species and is famous for its polar bear breeding. In the popular „Children‘s Zoo“, with a large playground, children can pet the animals or try riding a pony.</li>
<li className="list-item">Cultural offer – theatres, cinemas, exhibitions</li>
<li className="list-item">Tennis and badminton hall Sprint – it offers 6 tennis and 6 badminton courts, as well as 3 outdoor tennis courts which can be used in the summer season</li>
<li className="list-item">You can now buy stay packages or vouchers on our e-shop, which you can apply to all the services we offer.If you are interested in any of the offers, do not hesitate to contact the reception. We will be happy to help you with everything.</li>
</ul>
          </div>
        </div>
        <Image name={photo}/>
      </div>
  );
}
