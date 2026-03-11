import React from "react";
import { useForm } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xbjwnqkj");

  if (state.succeeded) {
    return (
      <p className="text-white text-xl mt-10">
        ✅ Thanks for your message!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-20">
      <input
        id="name"
        type="text"
        name="name"
        required
        placeholder="Enter Your Name"
        className="w-80 h-8 border-0 bg-gray-500 text-white rounded-[5px]"
      />
      <br />
      <input
        id="email"
        type="email"
        name="email"
        required
        placeholder="Enter Your Email"
        className="w-80 h-8 border-0 bg-gray-500 text-white rounded-[5px] mt-2"
      />
      <br />
      <input
        id="subject"
        type="text"
        name="subject"
        placeholder="Enter Your Subject"
        className="w-80 h-8 border-0 bg-gray-500 text-white rounded-[5px] mt-2"
      />
      <br />
      <textarea
        id="message"
        name="message"
        required
        placeholder="Enter Your Message"
        className="w-80 h-40 border-0 bg-gray-500 text-white rounded-[5px] mt-2"
      />
      <br />
      <button
        type="submit"
        disabled={state.submitting}
        className="w-80 h-8 border-0 bg-cyan-300 text-blue-600 font-bold rounded-[9px] mt-2 shadow-xl shadow-cyan-300"
        style={{
          boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)"
        }}
      >
        {state.submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
