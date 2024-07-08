import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import { REGISTER_POST } from "../../Api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { data, loading, error, request } = useFetch();
  const password = useForm('senha');
  const email = useForm('email');
  const username = useForm();
  const [registerRequested, setRegisterRequested] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (registerRequested) {
      async function postRegister() {
        const { url, options } = REGISTER_POST({
          password: password.value,
          email: email.value,
          username: username.value
        });
        try {
          await request(url, options);
        } catch (err) {
          toast.error(err.message, {
            hideProgressBar: true,
          });
          registerRequested(false)
        }
      }
      postRegister();
    }
  }, [registerRequested, request]);

  const handleSignUp = (event) => {
    event.preventDefault();
    if (username.validate() && email.validate() && password.validate()) {
      setRegisterRequested(true);
    } else {
      toast.error("Por favor, preencha todos os campos corretamente.", {
        hideProgressBar: true,
      });
    }
  };

  useEffect(() => {
    if (!loading && data) {
      console.log("Dados de REGISTRO: ", data);
      if (data) {
        toast.success("Cadastro realizado com sucesso!", {
          hideProgressBar: true,
        });
        navigate('/login');
      } else {
        toast.error("Algo de errado aconteceu...", {
          hideProgressBar: true,
        });
        registerRequested(false)
      }
    }
  }, [loading, data, navigate]);

  return (
    <>
      <Header />
      <section className="grid grid-cols-1 lg:grid-cols-2 pt-[80px] items-center">
        <div className="hidden bgLogin lg:block"></div>

        <div className="lg:w-full px-8 lg:pl-[120px] lg:mt-0 h-screen lg:h-auto mt-10">
          <h1 className="text-bold font-bold text-[32px] mb-7 font-carne">
            Cadastre-se
          </h1>
          <form onSubmit={handleSignUp}>
            <Input
              label="Usuário"
              typeValue="text"
              name="username"
              value={username.value}
              onChange={username.onChange}
              error={username.error}
            />
            <Input
              label="E-mail"
              typeValue="email"
              name="email"
              value={email.value}
              onChange={email.onChange}
              error={email.error}
            />
            <Input
              label="Senha"
              typeValue="password"
              name="password"
              value={password.value}
              onChange={password.onChange}
              error={password.error}
            />
            {loading ? (
              <Button disabled>Carregando...</Button>
            ) : (
              <Button type="submit">Cadastrar</Button>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
