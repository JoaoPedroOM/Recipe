import React from "react";
import { Link } from "react-router-dom";
import {formatBrazilianDate} from "../Utils/formatBrazilianDate"

const Cards = ({ data, find }) => {
  const url = parseInt(find);
  return (
    <Link
      to={`/receita/${url}`}
      className="flex flex-col rounded-md bg-[#f2f2f2] max-w-[550px] w-full h-[250px] cursor-pointer hover:scale-105 ease-in duration-200 shadow-md"
    >
      <div className="h-1/2">
        <img
          src={`http://localhost:1337${data.attributes.coverImage.data.attributes.url}`}
          alt="Foto da receita"
          className="h-full w-full rounded-t-md object-cover"
        />
      </div>
      <div className="h-1/2 flex flex-col justify-center p-2">
        <div className="w-full flex items-center justify-between mb-2">
          <span className="bg-orange-300 px-2 rounded-full font-bold text-[12px] flex items-center font-poppins">
            {data.attributes.Type}
          </span>
          <span className="uppercase italic text-[10px] lg:text-[15px] font-poppins">
            {formatBrazilianDate(data.attributes.publishedDate)}
          </span>
        </div>

        <h2 className="text-lg font-bold leading-[1] font-carne">{data.attributes.recipeTitle}</h2>
      </div>
    </Link>
  );
};

export default Cards;
