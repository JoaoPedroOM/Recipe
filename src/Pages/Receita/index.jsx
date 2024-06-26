import React, { useContext } from "react";
import Header from "../../components/Header";
import { ApiContext } from "../../Hooks/useContext";
import { useParams } from "react-router-dom";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Formatting from "../../Utils/Formatting";
import Footer from "../../components/Footer";

const Index = () => {
  const params = useParams();
  const { data, loading, error } = useContext(ApiContext);

  if (data) {
    const posts = data.data;
    const postId = params.id;
    const post = posts[postId - 1];

    const content = post.attributes.recipeContent;
    console.log(post);

    return (
      <>
        <Header />
        <div className="max-w-[1240px] mx-auto pt-[80px] px-5 lg:pt-[120px] mb-40">
          <h1 className="text-gray-900 text-4xl sm:text-5xl font-black">
            {post.attributes.recipeTitle} <br />
          </h1>
          <span className="text-[15px] text-gray-500">Receita por: {post.attributes.author}</span>

          <div className="mx-auto max-w-[1000px] mt-[25px]">
           <Formatting content={content}/>
          </div>
        </div>
        <Footer/>
      </>
    );
  } else if (error) {
    return <p>Infelizmente algo de errado aconteceu...</p>;
  } else {
    return (
      <div className="max-w-[1240px] mx-auto pt-[80px] px-5 lg:pt-[120px] text-gray-700 text-[25px] font-bold">
        Carregando receitas...
      </div>
    );
  }
};

export default Index;
