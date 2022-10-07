import { NavLink } from "react-router-dom";
import "./Css/ProgettiCardTuoi.css"; 
import ProgressBar from "@ramonak/react-progress-bar";
import Duomo from "../Images/Duomo.jpg"
export default function ProgettiCardsTuoiMenu() {

 
    return(

<main className="MaindivImpreseCardsTuoi">

<div className="MaindivImpreseChild1Tuoi">

<img className="progettiCardPlaceholderTuoi" src={Duomo}></img>

<div className="contenutoCardProgettiTuoi">

    
<p className="titoloCardProgettiTuoi">Luci in piazza</p>

<p className="sottotitoloCardProgettiTuoi">Tutti artisti</p>

<p className="descrizioneCardProgettiTuoi">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...</p>
<ProgressBar bgColor={'#d04b4b'} completed={60} />
<p className="budgetCardProgettiTuoi">€ 6.500 budget</p>
<p className="raccoltiCardProgettiTuoi">€ 4.500 raccolti</p>
    
    </div>




</div>













</main>
    );
}

