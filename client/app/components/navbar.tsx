import React from 'react';
import Image from 'next/image';
export default function Navbar() {
  return (
    <div className="w-full h-20 bg-black flex justify-center items-center ">
      <ul className="flex space-x-4 text-white">
        <li><Image src="/logo3.png" alt="" width={300}/></li>
      </ul>
    </div>
  );
}
