import React from 'react'

export interface TabProps {
  active: boolean;
  selectTab: () => void
  children: string;
};

const TabButton = ({active, selectTab, children}: TabProps) => {

    const btnClasses = active ? "border-b-2 border-cyan-500 pb-2" : "text-gray-500 pb-2";

  return (
    <button className='mx-auto md:mx-0' onClick={selectTab}>
      <p className={`mr-6 font-semibold ${btnClasses} hover:-translate-y-1`}>{children}</p>
    </button>
  )
}

export default TabButton
