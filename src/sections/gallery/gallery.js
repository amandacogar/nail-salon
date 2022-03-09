import React, { useState } from "react";
import { Container } from "react-bootstrap";
import gallery from "./gallery.json";
import GalleryItem from "./gallery-item";

function Gallery() {
  

  const [ data, setData ] = useState(gallery.photos);
  return (
    <>
      <section className="section" id="gallery">
        <h2 className="heading" id="gallery-header">
          gallery
        </h2>
        <h3>custom nail art, your way</h3>
        <Container id="gallery-container">
          {data.map((photo, i) => (
            <GalleryItem data={photo} key={i} />
          ))}
        </Container>
      </section>
    </>
  );
}

export default Gallery;
