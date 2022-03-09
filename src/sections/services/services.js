import React, { useState } from "react";
import { Image } from "react-bootstrap";
import header from "./header.jpg";
import services from "./services.json";
import Service from "./service.js";

function Services() {
  const [ data, setData ] = useState(services.manicures);
  const [ pedis, setPedis ] = useState(services.pedicures);
  return (
    <>
      <section className="section" id="services">
        <div id="services-header">
          <Image id="service-head-image" src={header} />
          <div id="service-dark-layer"></div>
        </div>
        <div id="section-body">
          <div className="service-list" id="manicures">
            <h3>Manicures</h3>
            {data.map((manicure, i) => (
              <Service data={manicure} key={i} />
            ))}
          </div>
          <div className="service-list" id="pedicures">
            <h3>Pedicures</h3>
            {pedis.map((pedicure, i) => (
              <Service data={pedicure} key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
