import React from "react";
import Cards from "./Cards";
import MainCard from "./MainCard";

const CardSection = ({ posts }) => {

  if (!posts || !Array.isArray(posts.data)) {
    return null; 
  }

  return (
    <section className="pt-[120px] max-w-[1240px] mx-auto">
      <h1 className="text-2xl uppercase font-bold mb-3 text-center lg:text-start">
        Receitas do dia
      </h1>
      <div className="flex justify-center mb-5">
        <MainCard />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-2 px-2 lg:gap-3">
        {posts.data.map((post) => (
          <Cards key={post.id} data={post} />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
