import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Css/ItuoiProgetti.css"
import ProgettiCardsTuoiMenu from './progettiCardsTuoiMenu';
export default function ItuoiProgettiCardComponent() {


    return(

<main>
<div className="nuovoProgettoButton">


<Link style={{textDecoration:'none', color:'black'}} to="/post-progetto">
<button style={{color:'black', background:'#aeaeae'}} className="buttonLogintuoiprogetti">+ Nuovo Progetto</button>
</Link>
</div>

 <div className="TuoiProgettiCardDiv">

<div className="TuoiProgettiCardDivChild1">
<ProgettiCardsTuoiMenu />
</div>



<div className="TuoiProgettiCardDivChild2">


<div className="impreseSostenitriciTuoiProgettiDiv">

<div className="impreseSostenitriciTuoiProgettiDiv2">
<p className="ImpreseSostenitriciP">Imprese sostenitrici</p>
<p  style={{color:"#d04b4b", fontSize:'40px', marginTop:'0vh'}} className="nconsumatorip">2</p>
</div>
<div className="vl">

</div>

<div className="impreseSostenitriciTuoiProgettiDiv3">
<p className="nconsumatorip">N. Consumatori</p>
<p style={{color:"#d04b4b", fontSize:'40px', marginTop:'0vh'}} className="nconsumatorip">2</p>

</div>

</div>


<div className="formTuoiProgettiDiv">
<input className="inputtuoiprogetti1"></input>
<button className="buttonLogintuoiprogetti">Invia</button>
</div>




</div>
 </div>

</main>
    );
}

  {/* <Link to="/progetti">Progetti</Link> |{" "}
        <Link to="/imprese">Imprese</Link> */}