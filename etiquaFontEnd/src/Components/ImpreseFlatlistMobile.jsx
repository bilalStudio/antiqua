import { NavLink } from "react-router-dom";
import "./Css/ImpreseFlatlistMobile.css"
import placeholderlogo from "../Images/neill.png"
export default function ImpreseFlatlistMobile() {


    return(

<main className="mainFlatlistImpreseMobile">
<div className="div1ImpreseFlatListMobile">
<img className="LogoPlaceholderImpreseMobile" src={placeholderlogo}></img>
</div>
<div className="div2ImpreseFlatListMobile">
    <p className="titoloImpreseFlatListMobile">Caffè O'Neil</p>
</div>
<div className="div3ImpreseFlatListMobile">
<p className="descrizioneImpreseFlatListMobile">Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet...</p>
</div>
<div className="div4ImpreseFlatListMobile">
<p className="distanzaImpreseFlatListMobile">50M</p>
</div>
<div className="div5ImpreseFlatListMobile">
<p className="donazioniImpreseFlatListMobile">€ 240,00</p>
</div>
</main>
    );
}

  {/* <Link to="/progetti">Progetti</Link> |{" "}
        <Link to="/imprese">Imprese</Link> */}