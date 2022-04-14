
import OnlyLogo from "../elements/OnlyLogo";
import Images from "../elements/Images";
import photo from "../resources/images/content/freev1.jpg"
import photo2 from "../resources/images/content/freev2.jpg"
export default function Freetime() {
    return (
        <div className="page">
            <OnlyLogo />
            <div className="content">
                <h1 className="cssanimation fadeInBottom">
                    Zábava a volný čas v hotelu</h1>
                <div className="text">
                    <div className="paragraph">

                        Na hotelu je Vám k dispozici finská sauna pro max. počet 8 osob. Součástí prostoru je odpočívárna, venkovní ochlazovna a vědro se studenou vodou.


                        Ohledně bližších informací a rezervace kontaktujte recepci: 99
                    </div>
                    <div className="paragraph">

                        Brno je městem veletrhů, ale moravská metropole nabízí také spoustu historických památek, kulturních akcí a vyžití pro děti. Můžete zde navštívit plno zajímavých míst a přírodních krás v samotném městě i jeho blízkém okolí.
                    </div>
                    <div className="paragraph">
                        <ul className="basic-ul">

                            <li className="list-item">Prohlídka Brna a okolí – hrad Špilberk, Labyrint pod Zelným trhem, Stará radnice, Vila Tugendhat-památka UNESCO, Brněnská přehrada, hrady Pernštejn, Veveří, Slavkovské bojiště, kláštery Předklášteří, Rajhrad, Dolní Kounice, CHKO Pálava, CHKO Moravský kras, Propast Macocha</li>
                            <li className="list-item">Rodiny s dětmi mohou využít služeb našich partnerů – BRuNO Family park -  děti se zde vyřádí na více než 40 atrakcích, např. autodromu, moři s lodičkami, tobogánu dlouhém 38 metrů a mnohém dalším. Pro úplně nejmenší děti (do 4 let) je k dispozici herna Mláďata.  Nebo </li>
                            <li className="list-item">Návštěva brněnské Zoo, která láká na více než 400 druhů zvířat, proslulá je chovem ledních medvědů. V oblíbené části „Dětská zoo“ s velkým hřištěm si mohou děti pohladit zvířátka anebo si vyzkoušet jízdu na ponících.</li>
                            <li className="list-item">Kulturní nabídka – divadla, kina, výstavy </li>
                            <li className="list-item">Tenisová a badmintonová hala Sprint – nabízí 6 tenisových, 6 badmintonových kurtů, v letní sezoně je možné využit jeden ze 3 venkovních tenisových kurtů.</li>
                            <li className="list-item">Nově si můžete na našem e-shopu zakoupit pobytové balíčky nebo vouchery, jež uplatníte na všechny námi nabízené služby.</li>
                        </ul>

                    </div>
                    <div className="paragraph">

                        V případě, že Vás nějaká z nabídek zaujala, neváhejte kontaktovat recepci. Rádi Vám se vším pomůžeme.
                    </div>
                    <div className="bottom-image">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            <Images name={photo} name2={photo2} />

        </div>
    );
};
