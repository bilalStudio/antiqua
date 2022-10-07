import "./Css/SignUpImpresa.css"
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";

const uploader = new Uploader({
    // Get production API keys from Upload.io
    apiKey: "free"
  });

export default function SignUpImpresaStep2() {


    return(
<div className="signupImpresastep2main">
   
<main className="signupconsumatore"> 

<h2 style={{fontWeight:'500'}}>Impresa Responsabile</h2>
<h2 style={{fontWeight:'500'}}>Nome Placeholder</h2>

<div  style={{width:'500px'}} className="inputformlogin">


<div>
<input  className="inputLogin" placeholder="Website URL"></input>
</div>
<div>
<input className="inputLogin" placeholder="Telefono"></input>
</div>
<div>
<input className="inputLogin" placeholder="Linkedin"></input>
</div>
<div>
<input className="inputLogin" placeholder="Facebook"></input>
</div>
<div>
<input className="inputLogin" placeholder="Instagram"></input>
</div>
<div>
<input className="inputLogin" placeholder="Youtube"></input>
</div>
<div>
<input className="inputLogin" placeholder="Twitter"></input>
</div>
<div className="indirizzoSignUpImprese">
<div className="indirizzoSignUpImpreseItem1">
<Link style={{textDecoration:'none', color:'black'}} to="/impresa-responsabile">
<div style={{marginTop:'3vh', marginLeft:'80px'}} >
<button  style={{marginBottom:'2rem'}} className="buttonLoginRow">Crea account </button>
<button className="buttonLoginRow"> indietro </button>
</div>
</Link>
</div>


</div>









</div>


</main>
</div>
    );
}