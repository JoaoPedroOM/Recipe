import React from "react";
import Cards from "./Cards";
import MainCard from "./MainCard";

const CardSection = ({ posts }) => {
  if (!posts || !Array.isArray(posts.data)) {
    return null;
  }

  const lastPost = posts.data.slice(-1)[0];
  const otherPosts = posts.data.slice(0, -1);
  console.log(otherPosts);

  return (
    <section className="pt-[120px] max-w-[1240px] mx-auto">
      <h1 className="text-2xl  font-bold mb-3 text-center lg:text-start font-main">
        Receitas do Dia
      </h1>
      <div className="flex justify-center mb-[250px] sm:mb-[180px] lg:mb-5">
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