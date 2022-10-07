import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Progetti from "./Screens/progetti";
import Imprese from "./Screens/imprese";
import Nonprofit from "./Screens/nonprofit";
import Login from "./Screens/login";
import ConsumatoreResponsabile from "./Screens/consumatoreResponsabile";
import ImpresaResponsabile from "./Screens/impresaResponsabile";
import ImpresaResponsabile2 from "./Screens/impresaResponsabile2";
import Nonprofit2 from "./Screens/nonprofit2";
import Nonprofitfeed from "./Screens/nonprofitfeed";
import ProgettoSingolo from "./Screens/progettoSingolo";
import ItuoiProgetti from "./Screens/ituoiprogetti";
import PostProgetto from "./Screens/postProgetto";
import PostProgettoStep2 from "./Screens/postProgettoStep2";
import PostProgettoStep3 from "./Screens/postProgettoStep3";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Progetti />} />
      <Route path="/progetti" element={<Progetti />} />
      <Route path="/imprese" element={<Imprese />} />
      <Route path="/nonprofit-signUp" element={<Nonprofit />} />
      <Route path="/nonprofit-signUp-2" element={<Nonprofit2 />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/consumatore-responsabile"
        element={<ConsumatoreResponsabile />}
      />
      <Route path="/impresa-responsabile" element={<ImpresaResponsabile />} />
      <Route
        path="/impresa-responsabile-2"
        element={<ImpresaResponsabile2 />}
      />
      <Route path="/nonprofit" element={<Nonprofitfeed />} />
      <Route path="/progettoSingolo" element={<ProgettoSingolo />} />
      <Route path="/tuoi-progetti" element={<ItuoiProgetti />} />
      <Route path="/post-progetto" element={<PostProgetto />} />
      <Route path="/post-progetto-step2" element={<PostProgettoStep2 />} />
      <Route path="/post-progetto-step3" element={<PostProgettoStep3 />} />
    </Routes>
  </BrowserRouter>
);
