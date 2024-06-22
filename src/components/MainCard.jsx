import React from 'react'

const MainCard = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center max-w-[90%] bg-[#f2f2f2] rounded-md cursor-pointer'>
      <div className='w-full lg:w-1/2'>
        <img 
          src='https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
          alt='bolo de chocolate' 
          className='object-cover w-full h-full lg:rounded-tl-md lg:rounded-bl-md rounded-tl-md rounded-tr-md'
        />
      </div>
      <div className='p-3 w-full lg:w-1/2'>
        <span className='uppercase italic'>April 19, 2024</span>
        <h2 className='text-4xl font-bold'>Receita de bolo de cenoura</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et possimus corporis modi eius, odio aperiam amet optio ad illum laboriosam perspiciatis vero quidem consectetur veniam dicta aspernatur doloribus magnam!</p>
      </div>
    </div>
  )
}

export default MainCard
