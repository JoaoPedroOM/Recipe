import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-row gap-2">
    <div className="w-4 h-4 rounded-full bg-orange-500 animate-bounce [animation-delay:.7s]"></div>
    <div className="w-4 h-4 rounded-full bg-orange-600 animate-bounce [animation-delay:.3s]"></div>
    <div className="w-4 h-4 rounded-full bg-orange-700 animate-bounce [animation-delay:.7s]"></div>
  </div>
  )
}

export default Loading
