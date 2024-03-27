import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from "./Navigation";
import Home from "./Home";
import NoPage from "./NoPage";
import Api from "./api/Api";
import Ukolnicek from "./mui/Ukolnicek";
import Kalkulacka from "./nacteni_vstupu/Kalkulacka";
import LocalStorage from './local_storage/LocalStorage';
import Eshop from './eshop/Eshop';
import OblibenaBarva from './oblibena_barva/OblibenaBarva';
import { useEffect, useState } from "react";

function App() {

  const [barva, nastavBarvu] = useState(localStorage.getItem(''));

  useEffect(() => {
    localStorage.setItem('', barva);
  }, [barva])


  return (
    <HashRouter basename='/'>
    <Navigation barva={barva} />
    <Routes>
        <Route index element={<Home />} />
        <Route path="/local_storage" element={<LocalStorage barva={barva} />} />
        <Route path="/nacteni_vstupu" element={<Kalkulacka barva={barva} />} />
        <Route path="/api" element={<Api barva={barva} />} />
        <Route path="/mui" element={<Ukolnicek barva={barva} />} />
        <Route path="/eshop" element={<Eshop barva={barva} />} />
        <Route path="/oblibena_barva" element={<OblibenaBarva barva={barva} nastavBarvu={nastavBarvu}/>} />
        <Route path="*" element={<NoPage />} />
    </Routes>
    </HashRouter>
    
  );
}

export default App;
