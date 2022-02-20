import OnlyLogo from "../elements/OnlyLogo";
import Tabulecka from "../elements/Tabulecka";
import Image from "../elements/Image";
import photo from "../resources/images/content/business1.jpg"
export default function Konference(){
    return(
        <div className="page">
            <OnlyLogo/>
            <div className="content">
<div className="text">
    <h1 className="cssanimation fadeInBottom">Konferenční prostory </h1>

            Hotel Vista disponuje klimatizovanými konferenčními sály - Velký sál, sál Revista a 2 malé salónky. Velký sál s kapacitou až 130 osob, ideální pro konání konferencí, banketů, prezentací produktů a jiných příležitostí.  Tento Velký sál lze rozdělit na dva menší sály, které jsou velmi dobře vybaveny i po technické stránce (kvalitní ozvučení, mikrofon, Wi-Fi připojení, plátno, data projektor, zatemnění).  Salonek Revista je vhodný až pro 50 osob ve školním uspořádání. 

                               
<Tabulecka/>
<h2>

Business prostor 
</h2>
<div className="paragraph">

Rádi Vám poskytneme následující: 
<ul className="basic-ul">

<li className="list-item">Jednací apartmán je ideální místo na uzavřené malé meetingy či pohovory</li>
<li className="list-item">V prostoru u recepce hotelu se nachází počítač s internetovým připojením, který můžete kdykoliv využít k Vašim potřebám</li>
<li className="list-item">Na recepci Vám rádi za poplatek vytiskneme nebo oskenujeme potřebný dokument </li>
</ul>
</div>

</div>
            </div>
<Image name={photo}/>
        </div>
    );
  };
  