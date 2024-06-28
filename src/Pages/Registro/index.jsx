import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import useFetch from "../../Hooks/useFetch";
import { REGISTER_POST } from "../../Api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialUser = { password: "", email: "" , username: ""};

const index = () => {
  const { data, loading, error, request } = useFetch();
  const [user, setUser] = useState(initialUser);
  const [registerRequested, setRegisterRequested] = useState(false);
  const navigate = useNavigate()

  const handleRegisterChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (registerRequested) {
      async function postRegister() {
        const { url, options } = REGISTER_POST(user);
        try {
          await request(url, options);
        } catch (err) {
          toast.error(err.message, {
            hideProgressBar: true,
          });
        }
      }
      postRegister();
    }
  }, [registerRequested, request]);


  const handleSignUp = (event) =>{
    event.preventDefault()
    setRegisterRequested(true)
  }

  useEffect(() => {
    if (!loading && data) {
      console.log("Dados de REGISTRO: ", data);
      if(data){
        setUser(initialUser)
        navigate('/login')
      }
      else {
        toast.error("Algo de errado aconteceu...", {
          hideProgressBar: true,
        });
      }
    }
  }, [loading, data]);

  return (
    <>
      <Header />
      <section className="grid grid-cols-1 lg:grid-cols-2 pt-[80px] items-center">
        <div className="hidden bgLogin lg:block"></div>

        <div className="lg:w-full px-8 lg:pl-[120px] lg:mt-0 h-screen lg:h-auto mt-10">
          <h1 className="text-bold font-bold text-[32px] mb-7 font-carne">
            Cadastre-se
          </h1>
          <form>
            <Input label="Usuário" typeValue="text" name="username" value={user.username} onChange={handleRegisterChange} />

            <Input label="E-mail" typeValue="email" name="email" value={user.email} onChange={handleRegisterChange} />

            <Input label="Senha" typeValue="password" name="password" value={user.password} onChange={handleRegisterChange}/>

            {loading ? (
            <Button disabled>Carregando...</Button>
            ): (
            <Button onClick={handleSignUp}>Cadastrar</Button>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default index;
