import React, { useState } from "react";

function ContactForm() {
  // use Hook to initialize the values of the state
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  //destructure the formState object into its named properties
  const { name, email, message } = formState;

  function handleChange(e) {
    // use setFormState() to update the formState value
    // The name property of target refers to the name attribute of the form element.
    // Without the spread operator formState object would be overwritten to only contain the name: value key pair
    setFormState({ ...formState, [e.target.name]: e.target.value });
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
            onChange={handleChange}
            defaultValue={name}
          />
        </div>
        <div>
          {/* Due to keywords reserved in JS, we need to replace the "for" attribute in <label> to "htmlFor" */}
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            defaultValue={email}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            onChange={handleChange}
            defaultValue={message}
            rows="5"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
