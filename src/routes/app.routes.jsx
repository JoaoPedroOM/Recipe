import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/index";
import Receita from "../Pages/Receita/index";
import Login from "../Pages/Login/index";
import Registro from "../Pages/Registro/index"
import { ApiProvider } from "../Hooks/useContext";
import { ToastContainer } from "react-toastify";
import { Protector } from "../Helper/login"
import Footer from "../components/Footer";

export function AppRoutes() {
  return (
    <ApiProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Protector>
              <Home />
              <Footer/>
            </Protector>
          }
        />
        <Route
          path="/receita/:id"
          element={
            <Protector>
              <Receita />
              <Footer/>
            </Protector>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/login/criar" element={<Registro />} />
      </Routes>
      <ToastContainer />
    </ApiProvider>
  );
}