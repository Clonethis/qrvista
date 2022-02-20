
import OnlyLogo from "../elements/OnlyLogo";
import Image from "../elements/Image";
import photo from "../resources/images/content/hotel2.jpg"

export default function Hotel(){
    return(
        <div className="page">
            <OnlyLogo/>
            <div className="content">

            <h1 className="cssanimation fadeInBottom">Informace o hotelu</h1>
            <div className="text">
                <div className="paragraph">
            4* hotel v klidné části Brna, jen kousek do centra města, to je Hotel Vista Brno.  Hotel se nachází v městské části Medlánky a od rušného centra města je vzdálen 13 minut jízdy MHD. Je velmi dobře dostupný z městského okruhu a dále na D1, D2. Hotel disponuje vlastním parkovištěm s omezenou kapacitou, které je pro naše klienty zcela bezplatné.
<div className="paragraph">
     Pro ubytování si můžete vybrat hned z několika nabízených kategorií pokojů. Disponujeme pokoji typu Standard, Business, DeLuxe či pokoji apartmánového typu.
    </div>
<h2>

Skladba pokojů
</h2>
                </div>
                <div className="bullet">
        <ul>

<li>Standard pokoj</li>
<li>Business pokoj </li>
<li>Deluxe pokoj</li>
<li>Apartmán Standard</li>
<li>Apartmán Business</li>
<li>Apartmán Deluxe </li>
        </ul>
                </div>

<div className="paragraph">
    Pokoje typu <div className="strong">Standard</div> jsou vybaveny vždy 2 oddělitelnými postelemi, LED televizí s českými i zahraničními programy, telefonem, Wifi připojením. Samozřejmostí je vlastní koupelna se sprchovým koutem včetně sociálního zařízení.
    </div>
<div className="paragraph">
    Pokoje typu <div className="strong">Business</div> jsou oproti pokojům Standard vybaveny navíc klimatizací, kávovým setem s nabídkou kávy a čajů a biokosmetikou.
    </div>
<div className="paragraph">
    Pokoje typu <div className="strong">Deluxe</div> disponují vybavením jako pokoje Business, navíc mají kapslový kávovar Julius Meinl, organickou přírodní kosmetikou pro ještě větší komfort našich hostů.
    </div>
<div className="paragraph">

<div className="strong">Apartmány</div> (41 m2) se skládají ze dvou částí: v první místnosti je ložnice s LED televizí s českými a zahraničními kanály, druhá místnost zahrnuje vybavenou kuchyňku s jídelním stolem a obývacím prostorem s rozkladatelnou pohovkou. K apartmánu náleží koupelna (se sprchovým koutem či vanou) a toaletou. Stejně jako pokoje, jsou i apartmány typu Standard, Business nebo Deluxe.
<div className="paragraph">

Moderní apartmány využijete i při dlouhodobém ubytování, nebo můžou být skvělou volbou pro rodiny s dětmi. 
</div>
            </div>
            <h2>

            Internet a telefon
            </h2>
            <div className="paragraph">

Při volání z pokoje do pokoje, vytočte číslo požadovaného pokoje a potvrďte tlačítkem SEND na telefonu.
Nabízíme Vám bezplatné bezdrátové internetové připojení (Wi-Fi) na všech pokojích a ostatních veřejných prostor hotelu.  K připojení není potřeba žádné heslo. 
            </div>
 
 <h2>

Bezpečnostní pokyny
 </h2>
 
 <div className="paragraph">

V případě vyhlášení požáru nebo nouzové situace zůstaňte, prosím, v klidu a postupujte dle evakuačního plánu.
 </div>
 <div className="paragraph">

 <ul>

<li>Neprodleně opusťte pokoj. Veškeré věci nechte v pokoji.</li>
<li>Scházejte dolů po vyznačených únikových cestách. (schéma je umístěno na dveřích pokoje.)</li>
<li>Nepoužívejte výtahy.</li>
<li>Jděte na místo evakuace</li>
<li>Řiďte se pokyny hotelového personálu</li>
 </ul>
 </div>
 <div className="paragraph">
V případě nelze-li opustit pokoj:
<ul>

<li className="list-item">Okamžitě volejte recepci.</li>
<li className="list-item">Zůstaňte na místě a vyčkejte na zásah profesionálních záchranářů.</li>
</ul>
 </div>
 
 

</div>
            </div>
            <Image name={photo}/>

        </div>
    );
  };
  