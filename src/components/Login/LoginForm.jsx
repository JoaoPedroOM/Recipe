import React, { useState, useEffect } from "react";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import { LOGIN_POST } from "../../Api/api";
import { toast } from "react-toastify";
import { storeUser } from "../../Helper/login";


const LoginForm = () => {
  const { data, loading, error, request } = useFetch();
  const identifier = useForm();
  const password = useForm('senha');
  const [loginRequested, setLoginRequested] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginRequested) {
      async function postLogin() {
        const { url, options } = LOGIN_POST({ identifier: identifier.value, password: password.value });
        const response = await request(url, options);
        if (!response.ok) {
          toast.error("Credenciais inválidas. Tente novamente.", {
            hideProgressBar: true,
          });
          setLoginRequested(false);
        }
      }
      postLogin();
    }
  }, [loginRequested, request, identifier.value, password.value]);

  const handleLogin = (event) => {
    event.preventDefault();
    if (identifier.validate() && password.validate()) {
      setLoginRequested(true);
    } else {
      toast.error("Por favor, preencha todos os campos corretamente.", {
        hideProgressBar: true,
      });
    }
  };

  useEffect(() => {
    if (!loading && data) {
      if (data.error) {
        toast.error(data.message || "Credenciais inválidas.", {
          hideProgressBar: true,
        });
        setLoginRequested(false);
      } else {
        storeUser(data);
        toast.success("Logado com sucesso!", {
          hideProgressBar: true,
        });
        identifier.setValue("");
        password.setValue("");
        navigate("/");
      }
    }
  }, [loading, data, navigate, identifier, password]);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 pt-[80px] items-center">
      <div className="hidden bgLogin lg:block"></div>

      <div className="lg:w-full px-8 lg:pl-[120px] lg:mt-0 h-screen lg:h-auto mt-10">
        <h1 className="text-bold font-bold text-[32px] mb-7 font-carne">
          Login
        </h1>
        <form onSubmit={handleLogin}>
          <Input
            label="Usuário"
            typeValue="text"
            name="identifier"
            value={identifier.value}
            onChange={identifier.onChange}
            error={identifier.error}
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
            <Button disabled>
              Carregando...
            </Button>
          ) : (
            <Button type="submit">Entrar</Button>
          )}
        </form>
        <div className="my-10">
          <h1 className="text-bold font-bold text-[32px] mb-3 font-carne">
            Cadastre-se
          </h1>
          <p className="font-poppins mb-5">
            Ainda não possui conta ? Cadastre-se no site.
          </p>

          <Link
            to="criar"
            className="text-base cursor-pointer border-none rounded-[0.4rem] bg-[#ff8100] text-white py-[0.8rem] px-[1.2rem] min-w-32 hover:bg-[#ff6f00] font-carne"
          >
            Cadastro
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
