import NavBar from "../Components/NavBar";
import Filtri1 from "../Components/Filtri1";
import ProgettiCards from "../Components/progettiCards";
import FiltriMobile from "../Components/FiltriMobile";
export default function Progetti() {


    return(
<div>
<NavBar />
<Filtri1 />
<FiltriMobile />
<main style={{ padding: "1rem 0" }}>


<ProgettiCards />
<ProgettiCards />

</main>
</div>
    );
}