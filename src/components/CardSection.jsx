import React, { useState } from "react";
import Pagination from '@mui/material/Pagination';
import Cards from "./Cards";
import MainCard from "./MainCard";

const CardSection = ({ posts }) => {
  const [page, setPage] = useState(1);
  const cardsPerPage = 4;

  if (!posts || !Array.isArray(posts.data)) {
    return null;
  }

  const lastPost = posts.data.slice(-1)[0];
  const otherPosts = posts.data.slice(0, -1);
  const reversedPosts = [...otherPosts].reverse();

  const handleChange = (event, value) => {
    setPage(value);
  };

  const indexOfLastCard = page * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = reversedPosts.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <section className="pt-[120px] max-w-[1240px] mx-auto mb-32" id="receitas">
      <h1 className="text-2xl font-bold mb-3 text-center lg:text-start font-carne text-[#302414]">
        Receitas do Dia
      </h1>
      <div className="flex justify-center max-[450px]:mb-[40px] max-[640px]:mb-[150px] sm:mb-[180px] md:mb-[200px] lg:mb-5">
        <MainCard data={lastPost} find={posts.data.length - 1} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-2 px-2 lg:gap-3">
        {currentCards.map((post, index) => (
          <Cards key={post.id} data={post} find={otherPosts.length - 1 - indexOfFirstCard - index} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          count={Math.ceil(reversedPosts.length / cardsPerPage)}
          page={page}
          onChange={handleChange}
          sx={{
            '& .MuiPaginationItem-root': {
              color: '#FF7043',
            },
          }}
        />
      </div>
    </section>
  );
};

export default CardSection;
