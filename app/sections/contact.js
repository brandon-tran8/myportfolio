import React from "react";
import config from "../data.json";
import ContactForm from "./contactform";

const Contact = () => {
  const contact = config.contact;
  return (
    <div
      id={contact.title}
      className="px-8 sm:px-12 md:px-32 pb-32 flex justify-center align-center flex-col bg-gradient-to-r from-stone-500 via-rose-400 to-indigo-400"
    >
      <h2 className="mt-12 uppercase font-bold text-center text-white text-bold text-4xl">
        {contact.title}
      </h2>
      <ContactForm />
    </div>
  );
};

export default Contact;
