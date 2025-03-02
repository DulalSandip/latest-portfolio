"use client"; // For Next.js client-side rendering

import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { XIcon } from "@heroicons/react/solid";

export const ContactForm = ({ onClose }: { onClose?: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState<null | boolean>(null); // Initialize to null

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = "service_4e11imd";
    const templateId = "template_jv7s49c";
    const userId = "6xrleQuOdcmmHv626";

    const toName = "Sandip Dulal";

    const emailData = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: toName,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, emailData, userId);
      setIsSuccess(true); // Show success modal
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSuccess(false); // Show error modal
    } finally {
      setIsSubmitting(false);
      // Close the modal after 2 seconds
      setTimeout(() => {
        if (onClose) onClose();
      }, 2000);
    }
  };

  // Automatically hide success/error message after 5 seconds
  useEffect(() => {
    if (isSuccess !== null) {
      const timer = setTimeout(() => {
        setIsSuccess(null);
      }, 5000); // Message disappears after 5 seconds
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [isSuccess]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg max-w-md w-full relative">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <XIcon className="h-6 w-6" />
          </button>
        )}

        <h2 className="text-xl font-semibold text-center mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-2 rounded bg-gray-800 text-white border border-gray-700"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-2 rounded bg-gray-800 text-white border border-gray-700"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-2 rounded bg-gray-800 text-white border border-gray-700"
            required
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-500 hover:bg-green-600 text-white py-2 rounded"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Success/Error Modal at the bottom */}
      {isSuccess !== null && (
        <div
          className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg text-white w-auto ${
            isSuccess ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <h3 className="font-semibold text-lg text-center">
            {isSuccess
              ? "Message sent successfully!"
              : "Failed to send message."}
          </h3>
        </div>
      )}
    </div>
  );
};
