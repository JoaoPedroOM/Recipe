import React from 'react'

const Button = ({children, ...props}) => {
  return (
    <button {...props} className='text-base cursor-pointer border-none rounded-[0.4rem] bg-[#ff8100] text-white py-[0.8rem] px-[1.2rem] min-w-32 hover:bg-[#ff6f00] font-carne'>
      {children}
    </button>
  )
}

export default Button