// 'use client'
import React from 'react'

const TabButton = ({active, selectTab, children}) => {

    const btnClasses = active ? "border-b-2 border-cyan-500" : "text-gray-500";

  return (
    <button onClick={selectTab}>
      <p className={`mr-6 font-semibold ${btnClasses}`}>{children}</p>
    </button>
  )
}

export default TabButton
