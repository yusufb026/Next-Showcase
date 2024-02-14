import React from 'react';

const Chip = ({ title, active }: { title: any; active?: any }) => {
  return (
    <div
      className={` m-2 flex h-8  cursor-pointer select-none items-center justify-center rounded-md  p-2 text-sm font-light 
    ${active ? ' border-0 bg-slate-800 text-slate-50 ' : ' border border-solid border-gray-500 text-gray-500 '} 
    `}
    >
      {title}
    </div>
  );
};

export default Chip;
