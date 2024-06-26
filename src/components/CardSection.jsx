import React from "react";
import Cards from "./Cards";
import MainCard from "./MainCard";

const CardSection = ({ posts }) => {
  if (!posts || !Array.isArray(posts.data)) {
    return null;
  }

  const lastPost = posts.data.slice(-1)[0];
  const otherPosts = posts.data.slice(0, -1).reverse();;
  

  return (
    <section className="pt-[120px] max-w-[1240px] mx-auto mb-32" id="receitas">
      <h1 className="text-2xl  font-bold mb-3 text-center lg:text-start font-main">
        Receitas do Dia
      </h1>
      <div className="flex justify-center max-[450px]:mb-[40px] max-[640px]:mb-[150px] sm:mb-[180px] md:mb-[200px] lg:mb-5">
        <MainCard data={lastPost} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-2 px-2 lg:gap-3">
        {otherPosts &&
          otherPosts.map((post) => <Cards key={post.id} data={post} />)}
      </div>
    </section>
  );
};

export default CardSection;
