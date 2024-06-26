import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Logo from "../assets/img/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-[1240px] mx-auto flex flex-col gap-2 justify-center items-center mb-3 lg:flex-row lg:justify-between">
        <div className="max-w-[80px]">
          <img src={Logo} alt="Logo Chef House" />
        </div>

        <div className="border-t border-[#1D060526] w-full flex justify-center pt-2 lg:border-none lg:pt-0">
          <ul className="flex gap-2">
            <li className="hover:font-bold">
              <a href="/">Home</a>
            </li>
            <li className="hover:font-bold">
              <a href="/#receitas">Receitas</a>
            </li>
            <li className="hover:font-bold">
              <a href="https://github.com/JoaoPedroOM/Recipe">Repositório</a>
            </li>
          </ul>
        </div>

        <div className="flex gap-3 border-t border-[#1D060526] w-full pt-4 justify-center lg:border-none lg:pt-0 lg:w-auto">
          <a href="https://github.com/JoaoPedroOM" target="_blank">
            <FaGithub size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-pedro-909822252"
            target="_blank"
          >
            <FaLinkedin size={25} />
          </a>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto text-center">
        <p className="text-[14px] w-full border-t border-[#1D060526] py-[12px]">
          <span className="text-black font-bold">2024 © Chef House.</span> Todos
          os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
