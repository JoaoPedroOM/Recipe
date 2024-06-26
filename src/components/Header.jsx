import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="w-full bg-yellow-950 bg-opacity-5 backdrop-blur-md fixed z-50">
      <nav className="flex items-center justify-between max-w-[1240px] mx-auto">
        <Link to="/">
          <img src={Logo} alt="Logo chef house" className="w-20 h-20"/>
        </Link>

        <Link to="/login" className="flex justify-center items-center gap-2 pr-3 lg:pr-0 font-carne">
          <span>Logar / Criar</span>
          <FaRegUser size={20}/>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
