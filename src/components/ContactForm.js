// src/components/ContactForm.js
import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vlg3f7y",
        "template_uauhdec",
        form.current,
        "_HmvtNz0LETVgzHoC"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Email error:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );

    e.target.reset(); // optional
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 p-4">
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="border p-2"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="border p-2"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="border p-2"
      />
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 hover:bg-gray-800"
      >
        Send
      </button>
    </form>
  );
}
