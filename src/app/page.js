"use client";


import {useState} from "react";
import { UploadButton } from "@/utils/uploadthing";

export default function Home() {

  const [image,setImage] = useState();

  return (
    <main
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "24px"
      }}
    >
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          setImage(res[0].url);
        }}
        onUploadError={(error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />

      <img src={image} alt="no Image "/>
    </main>
  );
}
