import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
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
  )
}


export default App;