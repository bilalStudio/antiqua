import { NavLink } from "react-router-dom";
import "./Css/Progetti.css"; 
import ProgressBar from "@ramonak/react-progress-bar";
import Duomo from "../Images/Duomo.jpg"
import { Link } from "react-router-dom";
export default function ProgettiCards() {


    return(


<main className="MaindivImpreseCards">
<Link style={{textDecoration:'none', color:'black'}} to="/progettoSingolo">


<div className="MaindivImpreseChild1">

<img className="progettiCardPlaceholder" src={Duomo}></img>

<div className="contenutoCardProgetti">

    
<p className="titoloCardProgetti">Luci in piazza</p>

<p className="sottotitoloCardProgetti">Tutti artisti</p>

<p className="descrizioneCardProgetti">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...</p>
<ProgressBar bgColor={'#d04b4b'} completed={60} />
<p className="budgetCardProgetti">€ 6.500 budget</p>
<p className="raccoltiCardProgetti">€ 4.500 raccolti</p>
    
    </div>




</div>
</Link>
<Link style={{textDecoration:'none', color:'black'}} to="/progettoSingolo">
<div className="MaindivImpreseChild2">
<img className="progettiCardPlaceholder" src={Duomo}></img>

<div className="contenutoCardProgetti">

    
<p className="titoloCardProgetti">Luci in piazza</p>

<p className="sottotitoloCardProgetti">Tutti artisti</p>

<p className="descrizioneCardProgetti">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...</p>
<ProgressBar bgColor={'#d04b4b'} completed={60} />
<p className="budgetCardProgetti">€ 6.500 budget</p>
<p className="raccoltiCardProgetti">€ 4.500 raccolti</p>
    
    </div>




</div>
</Link>
<Link style={{textDecoration:'none', color:'black'}} to="/progettoSingolo">

<div className="MaindivImpreseChild3">

<img className="progettiCardPlaceholder" src={Duomo}></img>

<div className="contenutoCardProgetti">

    
<p className="titoloCardProgetti">Luci in piazza</p>

<p className="sottotitoloCardProgetti">Tutti artisti</p>

<p className="descrizioneCardProgetti">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...</p>
<ProgressBar bgColor={'#d04b4b'} completed={60} />
<p className="budgetCardProgetti">€ 6.500 budget</p>
<p className="raccoltiCardProgetti">€ 4.500 raccolti</p>
    
    </div>



</div>
</Link>


</main>
    );
}

