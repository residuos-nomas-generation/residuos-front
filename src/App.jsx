import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Publicaciones from "./pages/Publicaciones";
import AcercaDe from "./pages/AcercaDe";
import InfoContacto from "./pages/InfoContacto";
import Perfil from "./pages/Perfil";
import NewPublication from "./pages/NewPublication";

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
          <Route path="/user" element={<Perfil />} />
          <Route path="/newpublication" element={<NewPublication />} />
        </Routes>
      </main>
      <Footer></Footer>
    </>
  )
}


export default App;