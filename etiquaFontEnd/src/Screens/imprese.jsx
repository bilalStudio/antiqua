import NavBar from "../Components/NavBar";
import Filtri1 from "../Components/Filtri1";
import FiltriMobile from "../Components/FiltriMobile";
import ImpreseFlatlist from "../Components/ImpreseFlatlist";
import ImpreseFlatlistMobile from "../Components/ImpreseFlatlistMobile";
export default function Imprese() {


    return(
<div>
    <NavBar />
    <Filtri1 />
    <FiltriMobile />
<main style={{ padding: "1rem 0" }}>


<ImpreseFlatlist />
<ImpreseFlatlist />
<ImpreseFlatlist />
<ImpreseFlatlist />
<ImpreseFlatlist />
<ImpreseFlatlistMobile />
<ImpreseFlatlistMobile />
<ImpreseFlatlistMobile />
<ImpreseFlatlistMobile />
<ImpreseFlatlistMobile />
</main>
</div>
    );
}