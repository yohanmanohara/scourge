import Navbar from "@/app/components/navbar";

export default function Home() {
  const googleDriveFileId = "1OafnTIdOB-bzLZAZZp1aykN0wXSTW8_1"; // Replace with your Google Drive file ID
  const videoSrc = `https://drive.google.com/uc?id=${googleDriveFileId}`;

  return (
    <main>
      <Navbar />
      
    </main>
  );
}
