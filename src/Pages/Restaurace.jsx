// import Header from "../elements/Header";
import OnlyLogo from "../elements/OnlyLogo";
// import Image from "../elements/Image";
import photo from "../resources/images/content/food5.jpg"
import photo2 from "../resources/images/content/food6.jpg"

import TwoBox from "../elements/TwoBox";
import Images from "../elements/Images";

export default function Restaurace() {
    return (
        <div className="page">
            <OnlyLogo />
            <div className="content">
                <div className="text">
                    <h1 className="cssanimation fadeInBottom">Restaurace</h1>
                    <div className="paragraph">

                        V příjemné atmosféře restaurace hotelu Vista pro Vás připravujeme snídaně, obědy, večeře či zajistíme catering.
                        {/* <a href="https://www.vista-hotel.cz/files/2021/10/962d7f3df4ab86fef915cd9c82d33535.pdf">Vista Restaurace jídelní lístek</a> */}
                    </div>

                    <div className="paragraph">
                        {/* Telefon a Internet
Při volání z pokoje do pokoje, vytočte číslo požadovaného pokoje a potvrďte tlačítkem SEND na telefonu.
Nabízíme Vám bezplatné bezdrátové internetové připojení (Wi-Fi) na všech pokojích a ostatních veřejných prostor hotelu.  K připojení není potřeba žádné heslo.  
 */}
                        <div className="paragraph">Snídaně podáváme pro ubytované, ale i pro neubytované hosty v prostorách restaurace v čase od <div className="strong"> 7:00 do 10:00</div>.	</div>
                        <div className="paragraph">V čase od <div className="strong">11:00 do 14:00</div> v restauraci nabízíme polední menu, složené z polévky a nabídky několika hlavních jídel. Denní nabídku naleznete na našich www stránkách v sekci restaurace – týdenní menu.</div>
                        <div className="paragraph">Restaurace je pro naše hosty otevřena denně <div className="strong">od 11:00 do 22:00</div>. V průběhu celého dne si můžete vybrat pokrmy z našeho jídelního lístku. </div>
                        <div className="paragraph">Případně můžete využít službu Room service. Objednat si můžete pomocí telefonu v pokoji. Stačí zavolat na č. 94 a objednat si u kolegů v restauraci v čase od <div className="strong">12:00 do 21:30</div>. Jídelní lístek naleznete zde: <a href="https://www.vista-hotel.cz/cs/restaurace">Restaurace - Hotel Vista Brno</a></div>
                    </div>
                    <div className="paragraph">

                        V hotelu jsme nezapomněli ani na naše nejmenší. Součástí přilehlých prostor hotelové restaurace je  dětský koutek, ve kterém se děti zabaví po čas celého Vašeho pobytu.
                    </div>




                    <h2>

                        Cateringové služby
                    </h2>
                    <div className="paragraph">

                        Nabízíme Vám využití našich cateringových služeb do Vámi vybraných prostor v Brně a v blízkém okolí. Nabídku sortimentu dle Vašich požadavků Vám zpracuje naše obchodní oddělení.
                    </div>
                    <div className="paragraph">
                        Kontaktní email:  <a href="mailto:akce@vista-hotel.cz
">akce@vista-hotel.cz
                        </a></div>
                </div>


            </div>
            <TwoBox />
            <Images name={photo} name2={photo2} />
        </div>
    );
};
