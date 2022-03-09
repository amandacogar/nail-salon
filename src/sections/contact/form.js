import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/35732490-73eb-11ec-b2d5-af79f33d926c";

function ContactForm() {
  const [ submitted, setSubmitted ] = useState(false);
  const [ validated, setValidated ] = useState(false);
  const [ name, setName ] = React.useState("");
  const [ email, setEmail ] = React.useState("");
  const [ message, setMessage ] = React.useState("");

  function validate(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(false);
      console.log("error. form entry not valid.");
    } else {
      setValidated(true);
      console.log("form validated");
    }
  }

  const handleSubmit = (e) => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
    console.log("submitted");
  };

  return (
    <>
      {submitted ? (
        <div className="text-2xl">Thank you! We'll be in touch soon.</div>
      ) : (
        <Form
          id="form"
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="post"
          target="_blank"
          validated={validated}
        >
          <Form.Group className="mb-3" controlId="name" hasValidation>
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Name cannot be left blank
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail" hasValidation>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="example@example.com"
              value={email}
              required
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <Form.Control.Feedback type="invalid">
              Enter a valid email address
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group hasValidation>
            <Form.Label>Message</Form.Label>
            <Form.Control
              name="textarea"
              as="textarea"
              type="text"
              required
              id="message"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
            />
          </Form.Group>
          <Form.Control.Feedback type="invalid">
            Message cannot be left blank
          </Form.Control.Feedback>

          <Button
            className="btn"
            type="submit"
            disabled={!name || !email || !message}
            onClick={validate}
          >
            Submit
          </Button>
        </Form>
      )}
    </>
  );
}

export default ContactForm;
