import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Image src="/logo/logo.png" width={50} height={50} alt="Logo" />
      <div className=" ml-2 whitespace-nowrap   text-xl font-semibold   ">Kids Corner School</div>
    </div>
  );
};

export default Logo;
