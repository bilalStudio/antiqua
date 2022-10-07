import { NavLink } from "react-router-dom";
import "./Css/Filtri1.css"

export default function Filtri1() {


    return(

<main>


<div className="filter1div">
<div className="filter1div">
    <p className="pFilter1">
        Mostra
    </p>
<div>
<select placeholder="*Nome Impresa" className="inputFilter1" name="cars" id="cars">
<option  value="ragione sociale">Tutte le categorie</option>
  </select>
</div>

</div>
<div className="filter1div">
<p className="pFilter1">Luogo</p>
<select placeholder="*Nome Impresa" className="inputFilter1" name="cars" id="cars">
<option  value="ragione sociale">Italia</option>
  </select>
</div>
<div className="filter1div">

</div>
<div className="filter1div">
<p className="pFilter1">Ordinati per</p>
<select placeholder="*Nome Impresa" className="inputFilter1" name="cars" id="cars">
<option  value="ragione sociale">Sostegno</option>
  </select>
</div>
</div>

</main>
    );
}

  {/* <Link to="/progetti">Progetti</Link> |{" "}
        <Link to="/imprese">Imprese</Link> */}