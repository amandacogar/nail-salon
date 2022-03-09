import React from "react";
import { Container, Table, Image } from "react-bootstrap";
import ContactForm from "./form";
import contactImage from "./contact.jpg";

function Contact() {
  return (
    <>
      <section className="section" id="contact">
        <Image src={contactImage} id="contact-image" alt=""></Image>
        <Container id="contact-body">
          <h2 className="heading" id="contact-heading">
            contact us
          </h2>
          <div id="contact-information">
            <div>123 Easy St, Maple Valley, WA 98038</div>
            <div>(555) 555-5555</div>
            <Table borderless id="hours">
              <tbody>
                <tr>
                  <td className="icon">
                    <a href="https://www.facebook.com">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </td>
                  <td className="icon">
                    <a href="https://www.instagram.com">
                      <i className="fab fa-instagram-square"></i>
                    </a>
                  </td>
                </tr>
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
          <ContactForm />
        </Container>
      </section>
    </>
  );
}

export default Contact;
