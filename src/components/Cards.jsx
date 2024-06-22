import React from 'react'

const Cards = ({post}) => {

    if (post) {
        console.log(post.data[0].attributes.recipeTitle);
      }
    
  return (
    <div className='flex flex-col rounded-md bg-[#f2f2f2] max-w-[550px] h-[250px] cursor-pointer'>

      <div className='h-1/2'>
        <img 
          src='https://images.unsplash.com/photo-1595080622896-844ff207e639?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
          alt='Foto da receita' 
          className='h-full w-full rounded-t-md object-cover'
        />
      </div>
      <div className='h-1/2 flex flex-col justify-center p-2'>
        <span className='uppercase italic'>April 19, 2024</span>
        <h2 className='text-lg font-bold'>Receita de bolo de cenoura</h2>
      </div>

    </div>
  )
}

export default Cards
