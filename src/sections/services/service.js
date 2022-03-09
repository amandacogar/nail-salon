import React from "react";
import { Button } from "react-bootstrap";

function Service({ data }) {
  return (
    <>
      <div className="service">
        <div>
          <h5 className="name">{data.name}</h5>
          <p className="price">$ {data.price}</p>
        </div>
        <div>
          <p className="service-text">{data.description}</p>
          <Button className="book" href="https://squareup.com/appointments/book/gxd09rijt4yp45/LZ3VPZE7B8S8R/start">Book</Button>
        </div>
      </div>
    </>
  );
}

export default Service;
