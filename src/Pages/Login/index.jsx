import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoginForm from "../../components/Login/LoginForm";

const index = () => {
  return (
    <>
      <Header />
      <LoginForm/>
      <Footer />
    </>
  );
};

export default index;
