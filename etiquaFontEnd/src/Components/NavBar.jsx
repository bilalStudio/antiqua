import { Link } from "react-router-dom";
import "./Css/NavBar.css"
import Logo from "../Images/logo.png"
import Scarica from "../Images/Scarica.png"
import NavBarUnder
  from "./NavBarUnder";
import Filtri1 from "./Filtri1";
export default function NavBar() {

  return (

    <main>
      <div>
        <nav
          className="NavBar"
        >
          <div className="scaricaappNav">

          </div>

          <div className="logodivNav">
            <img className="LogoPng" src={Logo}></img>
          </div>

          <div className="cercadivNav">
            <Link to="/login"> <button className="ButtonAccedi">Accedi</button></Link>

          </div>


        </nav>

        <NavBarUnder />

      </div>
    </main>
  );
}

{/* <Link to="/progetti">Progetti</Link> |{" "}
        <Link to="/imprese">Imprese</Link> */}