import React from 'react'

function Button({classname,text}) {
  return (
    <div>
        <button className={`bg-transparent h-2rem w-3rem border-2 p-2 rounded-md font-bold border-green-500 text-green-500 hover:bg-green-500 hover:text-[#f2f2f2] ${classname}`}>{text}</button>
    </div>
  )
}

export default Button