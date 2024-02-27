import NavBar from "./components/NavBar/NavBar";
<<<<<<< HEAD
import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />

        </Routes>
      </main>
    </>
=======
import Banner from "./components/Banner/Banner";

const App = () =>{
  return(
    <>
      <NavBar></NavBar> 
      <Banner></Banner>           
    </>
    

>>>>>>> main
  );
}

export default App;