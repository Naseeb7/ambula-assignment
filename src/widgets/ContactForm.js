import { AtSign } from "lucide-react";
import React, { useEffect, useState } from "react";

const ContactForm = () => {
  // State to manage input values, errors, and submission status
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    inquiry: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // Function to handle changes in input fields
  const handleChange = (e) => {
    setInputs((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  // Function to validate input values
  const validateInputs = (inputs) => {
    let errors = {};
    if (inputs.name.length <= 5) {
      errors.name = "Name is too short";
    }
    if (inputs.email.length <= 15) {
      errors.email = "Enter a valid e-mail id";
    }
    if (inputs.inquiry.length <= 15) {
      errors.inquiry = "Inquiry must be at least 15 characters long";
    }
    return errors;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate inputs and set errors
    setErrors(validateInputs(inputs));
    setSubmitting(true);
  };

  // Function to be executed after successful form submission
  const finishSubmit = () => {
    console.log(inputs);
    // You might want to send the form data to a server here
    setInputs({
      name: "",
      email: "",
      inquiry: "",
    });
  };

  // Effect to handle form submission and error logging
  useEffect(() => {
    // Check if there are no errors and the form is submitting
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit(); // Call finishSubmit to process form data
    }
    // eslint-disable-next-line
  }, [errors]); 

  return (
    // Main container for the contact form
    <div className="flex flex-col justify-center items-center p-2 gap-4">
      <AtSign className="text-teal-800" />
      {/* Form section */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full sm:w-1/3 justify-center border-2 rounded-xl bg-teal-50 p-4 gap-4 animate-scaleY origin-top"
      >
        {/* Name input */}
        <div className="flex flex-col relative">
          <label
            htmlFor="name"
            className="flex text-lg text-teal-800 font-semibold px-2"
          >
            Name
          </label>
          <input
            name="name"
            type="text"
            value={inputs.name}
            className="flex outline-none rounded-xl p-2 text-zinc-800 border"
            onChange={handleChange}
          />
          {/* Display name input error */}
          {errors.name && (
            <div className="flex text-xs text-teal-500">**{errors.name}</div>
          )}
        </div>
        {/* Email input */}
        <div className="flex flex-col relative">
          <label
            htmlFor="email"
            className="flex text-lg text-teal-800 font-semibold px-2"
          >
            E-mail
          </label>
          <input
            name="email"
            type="text"
            value={inputs.email}
            className="flex outline-none rounded-xl p-2 text-zinc-800 border"
            onChange={handleChange}
          />
          {/* Display email input error */}
          {errors.email && (
            <div className="flex text-xs text-teal-500">**{errors.email}</div>
          )}
        </div>
        {/* Inquiry input */}
        <div className="flex flex-col relative">
          <label
            htmlFor="inquiry"
            className="flex text-lg text-teal-800 font-semibold px-2"
          >
            How can we help ?
          </label>
          <input
            name="inquiry"
            type="text"
            value={inputs.inquiry}
            className="flex outline-none rounded-xl p-2 text-zinc-800 border"
            onChange={handleChange}
          />
          {/* Display inquiry input error */}
          {errors.inquiry && (
            <div className="flex text-xs text-teal-500">**{errors.inquiry}</div>
          )}
        </div>
        {/* Submit button */}
        <div className="flex justify-center items-center w-full">
          {/* Disable button if email is empty */}
          <button
            type="submit"
            disabled={inputs.email === "" && true}
            className="flex justify-center items-center p-2 rounded-2xl disabled:bg-teal-900 disabled:text-zinc-600 bg-teal-400 text-zinc-700 w-1/2 font-semibold hover:bg-teal-500 hover:text-zinc-800 duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
