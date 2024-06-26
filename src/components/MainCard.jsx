import React from 'react'
import { Link } from "react-router-dom";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";


const MainCard = ({data}) => {
  const content = data.attributes.recipeContent;
  return (
    <Link to={`/receita/${data.id}`} className='flex flex-col lg:flex-row items-center max-w-[90%] max-h-[410px] bg-[#f2f2f2] rounded-md cursor-pointer hover:scale-105 ease-in duration-200 shadow-md'>

      <div className='w-full lg:w-1/2 h-full'>
        <img 
          src={`http://localhost:1337${data.attributes.coverImage.data.attributes.url}`}
          alt='bolo de chocolate' 
          className='object-cover w-full h-full lg:rounded-tl-md lg:rounded-bl-md lg:rounded-tr-none rounded-tl-md rounded-tr-md'
        />
      </div>

      <div className='p-3 w-full lg:w-1/2 bg-[#f2f2f2] rounded-bl-md rounded-br-md lg:rounded-none'>
        <span className='uppercase italic'>{data.attributes.publishedDate}</span>
        <h2 className='text-4xl font-bold'>{data.attributes.recipeTitle}</h2>
        <div className="line-clamp-4">
        <BlocksRenderer
          content={content}
          blocks={{
            paragraph: ({ children }) => <p>{children}</p>,
          }}
        />
        </div>
      </div>

    </Link>
  )
}

export default MainCard
