"use client";

import { useState } from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { ContactForm } from "@/components/ContactForm"; // Import the ContactForm component

export const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal when called
  };

  const handleContactClick = () => {
    setIsModalOpen(true); // Open the modal when button is clicked
  };

  return (
    <div id="contact-us" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div
          className="bg-gradient-to-r from-emerald-300 to-sky-400 py-8 px-10 text-gray-900 rounded-3xl text-center md:text-left
        relative overflow-hidden z-0"
        >
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>

            <div>
              <button
                onClick={handleContactClick} // Open modal when clicked
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max border border-gray-900 hover:bg-gray-900/20"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Show the ContactForm modal when isModalOpen is true */}
        {isModalOpen && <ContactForm onClose={handleModalClose} />}
      </div>
    </div>
  );
};
