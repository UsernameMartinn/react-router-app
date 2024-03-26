import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from "./Navigation";
import Home from "./Home";
import NoPage from "./NoPage";
import Api from "./api/Api";
import Ukolnicek from "./mui/Ukolnicek";
import Kalkulacka from "./nacteni_vstupu/Kalkulacka";
import LocalStorage from './local_storage/LocalStorage';
import Eshop from './eshop/Eshop';
import OblibenaBarva from './oblibena_barva/Oblibena-barva';

function App() {
  return (
    <HashRouter basename='/'>
    <Navigation />
    <Routes>
        <Route index element={<Home />} />
        <Route path="local_storage" element={<LocalStorage />} />
        <Route path="nacteni_vstupu" element={<Kalkulacka />} />
        <Route path="api" element={<Api />} />
        <Route path="mui" element={<Ukolnicek />} />
        <Route path="eshop" element={<Eshop />} />
        <Route path="oblibena_barva" element={<OblibenaBarva />} />
        <Route path="*" element={<NoPage />} />
    </Routes>
    </HashRouter>
    
  );
}

export default App;
