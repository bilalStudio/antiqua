import { NavLink } from "react-router-dom";
import "./Css/NonProfit.css"; 
import ProgressBar from "@ramonak/react-progress-bar";
import Duomo from "../Images/Duomo.jpg";
import placeholderlogo from "../Images/neill.png";
export default function NonProfitCardComponent() {
 

    return(

<main>

<div className="divNonProfit">

<div className="NonProfitChild1">
<img className="NonProfitImageBackground" src={Duomo}></img>
<div className="LogoDivCardNonProfit">
<img className="LogoNonProfitCard" src={placeholderlogo}></img>

</div>
<p className="TitoloNonProfitCard">Mondo Azzurro</p>
<div className="raccolteimpresedivNonProfitCard">
<p className="raccolteattiveCardNonProfit"><b>1 </b>  raccolte attive</p>
</div>
<div className="raccolteimpresedivNonProfitCard">
<p className="raccolteattiveCardNonProfit"><b>5 </b>  imprese sostienitrici</p>
</div>
</div>


<div className="NonProfitChild2">
<img className="NonProfitImageBackground" src={Duomo}></img>
<div className="LogoDivCardNonProfit">
<img className="LogoNonProfitCard" src={placeholderlogo}></img>

</div>
<p className="TitoloNonProfitCard">Mondo Azzurro</p>
<div className="raccolteimpresedivNonProfitCard">
<p className="raccolteattiveCardNonProfit"><b>1 </b>  raccolte attive</p>
</div>
<div className="raccolteimpresedivNonProfitCard">
<p className="raccolteattiveCardNonProfit"><b>5 </b>  imprese sostienitrici</p>
</div>
</div>

<div className="NonProfitChild3">
<img className="NonProfitImageBackground" src={Duomo}></img>
<div className="LogoDivCardNonProfit">
<img className="LogoNonProfitCard" src={placeholderlogo}></img>

</div>
<p className="TitoloNonProfitCard">Mondo Azzurro</p>
<div className="raccolteimpresedivNonProfitCard">
<p className="raccolteattiveCardNonProfit"><b>1 </b>  raccolte attive</p>
</div>
<div className="raccolteimpresedivNonProfitCard">
<p className="raccolteattiveCardNonProfit"><b>5 </b>  imprese sostienitrici</p>
</div>
</div>

</div>


</main>
    );
}

