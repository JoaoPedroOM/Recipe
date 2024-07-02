import React, { useContext } from "react";
import Header from "../../components/Header";
import { ApiContext } from "../../Hooks/useContext";
import { useParams } from "react-router-dom";
import Formatting from "../../Utils/Formatting";
import RecipeComments from "../../components/Receita/RecipeComments";
import Error from "../../Helper/Error";

const Index = () => {
  const params = useParams();
  const { data, loading, error } = useContext(ApiContext);

  if (data) {
    const posts = data.data;
    const postId = parseInt(params.id);
    const post = posts[postId];

    const content = post.attributes.recipeContent;

    return (
      <>
        <Header />
        <div className="flex-grow">
          <div className="max-w-[1240px] mx-auto pt-[80px] px-5 lg:pt-[120px] mb-40">
            <h1 className="text-gray-900 text-4xl sm:text-5xl font-black">
              {post.attributes.recipeTitle} <br />
            </h1>
            <span className="text-[15px] text-gray-500">
              Receita por: {post.attributes.author}
            </span>

            <div className="mx-auto max-w-[1000px] mt-[25px]">
              <Formatting content={content} />
            </div>
           <RecipeComments id={postId} />
          </div>
        </div>
      </>
    );
  } else if (error) {
    return <Error error={error} />;
  } else {
    return (
      <>
        <Header />
        <div className="flex-grow">
          <div className="max-w-[1240px] mx-auto pt-[80px] px-5 lg:pt-[120px] text-gray-700 text-[25px] font-bold">
            Carregando receita...
          </div>
        </div>
      </>
    );
  }
};

export default Index;
