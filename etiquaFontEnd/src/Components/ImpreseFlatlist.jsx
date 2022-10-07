import { NavLink } from "react-router-dom";
import "./Css/ImpreseFlatlist.css"
import placeholderlogo from "../Images/neill.png"
export default function ImpreseFlatlist() {


    return(

<main className="mainFlatlistImprese">

<div className="flatlistimpreseComponent">
<div className="logoImpresa">
<img className="LogoPlaceholderImprese" src={placeholderlogo}></img>
</div>

<div className="titolodescrizioneImpresa">
<p className="titoloImpresa">Caffè O'Neil</p>
<p className="descrizioneImpresa">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed</p>

</div>
<div  class="v1"></div>
<div className="distanzaImprese">
<p className="distanzaImpresap">50 m</p>
<p>distanza</p>
</div>
<div  style={{paddingLeft:'10px', paddingRight:'10px'}} class="v1"></div>
<div className="donazioniImpresa">
<p className="donazioniimpresep">€ 240,00</p>
<p>Donazioni</p>
</div>
</div>

</main>
    );
}

  {/* <Link to="/progetti">Progetti</Link> |{" "}
        <Link to="/imprese">Imprese</Link> */}