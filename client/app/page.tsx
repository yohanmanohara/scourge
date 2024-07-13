import React from "react";
export default function Home() {
  const googleDriveFileId = "1OafnTIdOB-bzLZAZZp1aykN0wXSTW8_1"; // Replace with your Google Drive file ID

  return (
    <main className=" bg-black max-h-screen" >
    
    <div className="h-screen w-screen flex justify-center items-center">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/YKaiXY7zHxk?autoplay=1&loop=1&playlist=YKaiXY7zHxk&mute=1&controls=0&modestbranding=1&rel=0"
        title="CINEMATIC PORTRAIT STREET STYLE | Sony A7C | Batis 25mm f2 | BROLL"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        frameBorder="0"
        className="aspect-w-16 aspect-h-9"
      ></iframe>
    </div>
    </main>
  );
}
