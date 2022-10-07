import { NavLink } from "react-router-dom";
import "./Css/ProgettoSingolo.css"
import Duomo from "../Images/Duomo.jpg"
import ProgressBar from "@ramonak/react-progress-bar";

import Tabs from "./Tabs";
export default function ProgettoSingoloHeader() {


    return(

<main>

<div className="HeaderPicture">
<img className="PlaceholderImage" src={Duomo}></img>
</div>
  <div className="HeaderBarDiv">
  <div className="HeaderBarDivC1">

<Tabs />
  </div>
  <div className="HeaderBarDivC22"> 
  <div className="HeaderBarDivC2">
    <div color="SostieniProgettoDiv">
    <h1 className="SostieniProgettiH1">Sostieni un progetto</h1>
 
   
    
    </div>
    <button className="buttonLoginProgettoSingolo">Donazione</button>
    <button className="buttonLoginProgettoSingolo">Donazione</button>

</div>

<div className="BudgetRichiesto">
<p style={{color:'rgb(160, 160, 160);', fontSize:'20px', fontWeight:'400'}}>Budget richiesto € 6.500</p>
<ProgressBar className="barra" bgColor={'rgb(0, 204, 136)'} completed={60} />
<p style={{color:'rgb(0, 204, 136)', fontSize:'25px', fontWeight:'400'}}>€ 4.500 raccolti</p>

</div>

</div>

  </div>
 

</main>
    );
}

