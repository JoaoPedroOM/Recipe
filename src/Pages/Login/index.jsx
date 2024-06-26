import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";

const index = () => {
  return (
    <>
      <Header />
      <section className="grid grid-cols-1 lg:grid-cols-2 pt-[80px] items-center">
        <div className="hidden bgLogin lg:block"></div>


        <div className="lg:w-full px-8 lg:pl-[120px] lg:mt-0 h-screen lg:h-auto mt-10">
        <h1 className="text-bold font-bold text-[32px] mb-7 font-carne">Login</h1>
          <form>
            <Input label="Usuário" typeValue="text" name="username" />
            <Input label="Senha" typeValue="password" name="password" />

            <Button>Entrar</Button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default index;
