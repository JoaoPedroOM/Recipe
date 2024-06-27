import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/index";
import Receita from "../Pages/Receita/index";
import Login from "../Pages/Login/index";
import Registro from "../Pages/Registro/index"
import { ApiProvider } from "../Hooks/useContext";

export function AppRoutes() {
  return (
    <ApiProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receita/:id" element={<Receita />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/criar" element={<Registro/>} />
      </Routes>
    </ApiProvider>
  );
}
