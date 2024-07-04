import React, { useContext } from "react";
import Header from "../../components/Header";
import { ApiContext } from "../../Hooks/useContext";
import { useParams } from "react-router-dom";
import Formatting from "../../Utils/Formatting";
import RecipeComments from "../../components/Receita/RecipeComments";
import Error from "../../Helper/Error";
import Loading from "../../Helper/Loading";
import Footer from "../../components/Footer";

const Index = () => {
  const params = useParams();
  const { data, loading, error } = useContext(ApiContext);

  if (data) {
    const posts = data.data;
    const postId = parseInt(params.id);
    const post = posts[postId];

    const content = post.attributes.recipeContent;

    return (
      <div className="flex flex-col min-h-screen">
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
        <Footer />
      </div>
    );
  } else if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="py-4 px-6 max-w-[1240px] mx-auto">
          <Error error={error} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="py-4 px-6 max-w-[1240px] mx-auto">
          <Loading />
        </div>
      </div>
    );
  }
};

export default Index;
