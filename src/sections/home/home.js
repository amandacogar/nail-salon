import React from "react";
import { Image, Table, Button } from "react-bootstrap";
import home from "./home.jpg";
import Review from "./reviews.js";

function Home() {
  return (
    <>
      <section className="section">
        <div id="home">
          <Image src={home} id="home-image" />
          <div id="home-content">    
            <h1 id="title">nail salon</h1>
            <h2 className="subheading">manicures and pedicures</h2>
            <Button href="https://squareup.com/appointments/book/gxd09rijt4yp45/LZ3VPZE7B8S8R/start">
              Book Now
            </Button>
          </div>
        </div>
        <div id="about">
          <div id="about-paragraph">
            <h3>LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quam expedita, amet suscipit error harum vero sit nemo quis,
              repellat culpa deserunt iure nam, dolores inventore nobis ex
              commodi ad consequatur cupiditate? Temporibus dolor optio
              repellendus, veniam tempora aspernatur voluptas.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quam expedita, amet suscipit error harum vero sit nemo quis,
              repellat culpa deserunt iure nam, dolores inventore nobis ex
              commodi ad consequatur cupiditate? Temporibus dolor optio
              repellendus, veniam tempora aspernatur voluptas.
            </p>
          </div>
          <div id="about-info">
            <h2 className="heading" id="about-heading">
              about us
            </h2>
            <div id="contact-info">
              <div>123 Easy St, Maple Valley, WA 98038</div>
              <div>(555) 555-5555</div>
              <Table borderless id="hours">
                <tbody>
                  <tr>
                    <td className="day">Monday - Thursday:</td>
                    <td className="time">6:00am - 6:00pm</td>
                  </tr>
                  <tr>
                    <td className="day">Friday-Sunday:</td>
                    <td className="time">6:00am - 8:00pm</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div id="social-info">
              <a href="https://www.facebook.com">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com">
                <i className="fab fa-instagram-square"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Review />
    </>
  );
}

export default Home;
