import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Editor from "../../components/AddRecipe/Editor";
import Button from "../../components/Form/Button";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-grow flex flex-col items-center justify-center mx-2">
        <div className="w-full max-w-[1100px] rounded-xl min-h-[700px] shadow-sm border border-black/20 mt-24 lg:mx-auto bg-zinc-800">
          <div className="p-4">
            <Editor/>
          </div>
        </div>
        <div className="my-5">
          <Button>Fazer Post</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;