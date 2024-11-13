"use client";
import {useState} from "react";
import { UploadButton } from "@/utils/uploadthing";
import "./Home.css";

export default function Home() {

  const [image,setImage] = useState();
  const [first_image,set_first_image] = useState();
  const [second_image,set_second_image] = useState();
  const [third_image,set_third_image] = useState();
  const [forth_image,set_forth_image] = useState();

  return (
    <div className="Home">
      <div className="add_new_item_area">
        <div className="leading_image">
          <img src={image} alt="" className="preview_leading_image"/>
           <UploadButton
             content={{
                button({ ready }) {
                  if (ready) return <div>Upload</div>;
                }
              }}
              appearance={{
                button: {
                  background : 'black',
                },

              }}
              className="upload_btn"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setImage(res[0].url);
              }}
              onUploadError={(error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />
        </div>
        <div className="supporting_images_area">
          <div className="first_image">
            
           <img src={first_image} alt="" className="preview_leading_image"/>
           <UploadButton
              content={{
                button({ ready }) {
                  if (ready) return <div>Upload</div>;
                }
              }}
              appearance={{
                button: {
                  background : 'black',
                },

              }}
              className="upload_btn supporting_image_upload"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                set_first_image(res[0].url);
              }}
              onUploadError={(error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />

          </div>
          <div className="second_image">
            
           <img src={second_image} alt="" className="preview_leading_image"/>
           <UploadButton
              content={{
                button({ ready }) {
                  if (ready) return <div>Upload</div>;
                }
              }}
              appearance={{
                button: {
                  background : 'black',
                },

              }}
              className="upload_btn supporting_image_upload"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                set_second_image(res[0].url);
              }}
              onUploadError={(error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />

          </div>
          <div className="third_image">
            
           <img src={third_image} alt="" className="preview_leading_image"/>
           <UploadButton
              content={{
                button({ ready }) {
                  if (ready) return <div>Upload</div>;
                }
              }}
              appearance={{
                button: {
                  background : 'black',
                },

              }}
              className="upload_btn supporting_image_upload"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                set_third_image(res[0].url);
              }}
              onUploadError={(error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />

          </div>
          <div className="forth_image">
            
           <img src={forth_image} alt="" className="preview_leading_image"/>
           <UploadButton
              content={{
                button({ ready }) {
                  if (ready) return <div>Upload</div>;
                }
              }}
              appearance={{
                button: {
                  background : 'black',
                },

              }}
              className="upload_btn supporting_image_upload"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                set_forth_image(res[0].url);
              }}
              onUploadError={(error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />

          </div>
        </div>

        <input type="text" placeholder="Enter Product Name" className="input "/>
        <input type="text" placeholder="Enter Product Price" className="input "/>
        <input type="text" placeholder="Enter Image Description" className="input "/>
        <input type="text" placeholder="Enter Product Category" className="input "/>

        <div className="add_item_button">Add Product</div>
      </div>
    </div>
  );
}
