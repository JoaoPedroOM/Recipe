import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
      <Link to={`/receita/${data.id}`} className="flex flex-col rounded-md bg-[#f2f2f2] max-w-[550px] w-full h-[250px] cursor-pointer hover:scale-105 ease-in duration-200">
        <div className="h-1/2">
          <img
            src={`http://localhost:1337${data.attributes.coverImage.data.attributes.url}`}
            alt="Foto da receita"
            className="h-full w-full rounded-t-md object-cover"
          />
        </div>
        <div className="h-1/2 flex flex-col justify-center p-2">
          <span className="uppercase italic">
            {data.attributes.publishedDate}
          </span>
          <h2 className="text-lg font-bold">{data.attributes.recipeTitle}</h2>
        </div>
      </Link>
  );
};

export default Cards;
