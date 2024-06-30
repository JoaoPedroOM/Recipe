import React from "react";
import { Link } from "react-router-dom";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import {formatBrazilianDate} from "../Utils/formatBrazilianDate"

const MainCard = ({ data }) => {
  const content = data.attributes.recipeContent;
  return (
    <Link
      to={`/receita/${data.id}`}
      className="flex flex-col lg:flex-row items-center min-w-[80%] max-h-[410px] lg:bg-[#f2f2f2] rounded-md cursor-pointer lg:hover:scale-105 ease-in duration-200 lg:shadow-md px-3 lg:px-0 "
    >
      <div className="w-full lg:w-1/2 h-full">
        <img
          src={`http://localhost:1337${data.attributes.coverImage.data.attributes.url}`}
          alt="bolo de chocolate"
          className="object-cover w-full h-full lg:rounded-tl-md lg:rounded-bl-md lg:rounded-tr-none rounded-tl-md rounded-tr-md"
        />
      </div>

      <div className="p-3 w-full lg:w-1/2 bg-[#f2f2f2] rounded-bl-md rounded-br-md lg:rounded-none ">
        <div className="flex items-center gap-2">
          <span className="bg-orange-300 px-2 rounded-full font-bold text-[12px] items-center inline-block">
            {data.attributes.Type}
          </span>
          <span className="uppercase italic">
            {formatBrazilianDate(data.attributes.publishedDate)}
          </span>
        </div>
        <h2 className="text-4xl font-bold font-carne">{data.attributes.recipeTitle}</h2>
        <div className="line-clamp-4 font-poppins">
          <BlocksRenderer
            content={content}
            blocks={{
              paragraph: ({ children }) => <p>{children}</p>,
            }}
          />
        </div>
      </div>
    </Link>
  );
};

export default MainCard;
