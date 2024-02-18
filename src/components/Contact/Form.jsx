import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';


const EmailContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_xl272p3",
        "template_87znu1d",
        form.current,
        "7L44NNLgW-Z6qV7Cp"
      )
      .then(
        (result) => {
          console.log('success');
          toast.success('Message sent sucessfully!');
          form.current.reset();
        },
        (error) => {
          toast.error('Error in sending!');
          console.log(error);
          form.current.reset();
        }
      );
  };

  return (
    <>
      <div id="form" className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-md">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <label className="block text-gray-700">Name*</label>
          <input
            type="text"
            name="user_name"
            className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
            required
          />

          <label className="block text-gray-700">Email*</label>
          <input
            type="email"
            name="user_email"
            className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
            required
          />

          <label className="block text-gray-700">Message*</label>
          <textarea
            name="message"
            id="text"
            cols="30"
            rows="6"
            className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-700 focus:outline-none"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default EmailContactForm;
