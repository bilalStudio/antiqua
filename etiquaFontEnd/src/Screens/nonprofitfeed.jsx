import NavBar from "../Components/NavBar";

import NonProfitCardComponent from "../Components/NonProfitCardComponent";
import Filtri1 from "../Components/Filtri1";
import FiltriMobile from "../Components/FiltriMobile";
export default function Nonprofitfeed() {


    return(
<div>
<NavBar />
<Filtri1 />
<FiltriMobile />
<main style={{ padding: "1rem 0" }}>

<NonProfitCardComponent />
<NonProfitCardComponent />

</main>
</div>
    );
}