import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full h-20 bg-black flex justify-center items-center">
      <ul className="flex space-x-4 text-white">
        <li><img src="/logo3.png" alt="" width={300}/></li>
      </ul>
    </nav>
  );
}
