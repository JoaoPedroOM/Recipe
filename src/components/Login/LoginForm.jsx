import React, { useState } from "react";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { Link } from "react-router-dom";

const initialUser = {password: "", username: ""};

const LoginForm = () => {

    const [user, setUser] = useState(initialUser)

    const handleChange = ({ target }) => {
      const { name, value } = target;
      setUser((currentUser) => ({
        ...currentUser,
        [name]: value,
      }));
    };
  
    const handleLogin = () => {
  
    }
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 pt-[80px] items-center">
        <div className="hidden bgLogin lg:block"></div>

        <div className="lg:w-full px-8 lg:pl-[120px] lg:mt-0 h-screen lg:h-auto mt-10">
          <h1 className="text-bold font-bold text-[32px] mb-7 font-carne">
            Login
          </h1>
          <form>
            <Input label="Usuário" typeValue="text" name="username" value={user.username} onChange={handleChange}/>
            <Input label="Senha" typeValue="password" name="password" value={user.password} onChange={handleChange} />

            <Button>Entrar</Button>
          </form>
          <div className="my-10">
            <h1 className="text-bold font-bold text-[32px] mb-3 font-carne">
              Cadastre-se
            </h1>
            <p className="font-poppins mb-5">Ainda não possui conta ? Cadastre-se no site.</p>

            <Link to="criar" className="text-base cursor-pointer border-none rounded-[0.4rem] bg-[#ff8100] text-white py-[0.8rem] px-[1.2rem] min-w-32 hover:bg-[#ff6f00] font-carne">
              Cadastro
            </Link>
          </div>
        </div>
      </section>
  )
}

export default LoginForm
