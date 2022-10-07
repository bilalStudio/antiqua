import { NavLink } from "react-router-dom";


export default function NonProfitFilter() {

    let activeStyle = {
        backgroundColor: 'white',
       color:'#d04b4b',
       transition:'1s'
      };
 let activeClassName = "activebuttonnav";

    return(

<main>


<div>
    <nav
className="navbarunder"
      >
        <div className="impresenav">
        <NavLink     style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="navbarundernavlinks" to="/imprese"><h1>Imprese</h1> </NavLink>
            
        </div>

        <div className="progettinav"> 
        <NavLink     style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="navbarundernavlinks" to="/progetti"><h1>Progetti</h1> </NavLink>
      
        </div>

        <div className="nonprofitnav">
        <NavLink     style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="navbarundernavlinks" to="/nonprofit"><h1>Non profit</h1> </NavLink>
       
        </div>
      
      
      </nav>
    </div>

</main>
    );
}

  {/* <Link to="/progetti">Progetti</Link> |{" "}
        <Link to="/imprese">Imprese</Link> */}