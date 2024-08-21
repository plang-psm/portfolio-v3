import React from 'react';

const NotFound = ({ title }: any) => {
  return (
    <div>
      <p className='text-xl p-12 mt-[10rem] text-center w-[400px] h-[130px] m-auto '>{` ${title} Not Found`}</p>
    </div>
  );
};

export default NotFound;
