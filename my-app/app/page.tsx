import Image from "next/image";
import Navbar from "@/app/components/navbar";

export default function Home() {
  const googleDriveFileId = "1OafnTIdOB-bzLZAZZp1aykN0wXSTW8_1";
  const videoSrc = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;

  return (
    <main>
      <Navbar />
      <div className="video-container">
        <video autoPlay muted loop controls width="100%" height="auto">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  );
}
