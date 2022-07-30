import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  // use Hook to initialize the values of the state
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  //destructure the formState object into its named properties
  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    // validation
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    // use setFormState() to update the formState value
    // The name property of target refers to the name attribute of the form element.
    // Without the spread operator formState object would be overwritten to only contain the name: value key pair
    if (!errorMessage) {
      // state only updates if the form data has passed the quality tests
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    //JSX
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            onBlur={handleChange}
            defaultValue={name}
          />
        </div>
        <div>
          {/* Due to keywords reserved in JS, we need to replace the "for" attribute in <label> to "htmlFor" */}
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            onBlur={handleChange}
            defaultValue={email}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            onBlur={handleChange}
            defaultValue={message}
            rows="5"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
