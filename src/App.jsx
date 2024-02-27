import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Publicaciones from "./pages/Publicaciones";
import AcercaDe from "./pages/AcercaDe";
import InfoContacto from "./pages/InfoContacto";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/tienda" element={<Publicaciones />} />
          <Route path="/nosotros" element={<AcercaDe />} />
          <Route path="/info" element={<InfoContacto />} />
        </Routes>
      </main>
    </>
  )
}


export default App;