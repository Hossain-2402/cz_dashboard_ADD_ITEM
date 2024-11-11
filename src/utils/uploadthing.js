import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

import { OurFileRouter } from "@/app/api/uploadthing/core"; // Optional: Only if you need it elsewhere

export const UploadButton = generateUploadButton();
export const UploadDropzone = generateUploadDropzone();
