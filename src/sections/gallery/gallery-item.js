import React from "react";
import { Image } from "react-bootstrap";

function GalleryItem({ data }) {
  return (
    <>
      <div className="gallery-item">
        <Image src={data.link} className="photo" />
        <p className="gallery-description">{data.description}</p>
      </div>
    </>
  );
}

export default GalleryItem;
