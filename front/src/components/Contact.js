import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import draw from "../assets/draw.svg"


const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send("service_28vx80f", "template_y2b9w63", data, "t4ZVhd8_x7S9Mnzns")
      .then(() => {
        alert("Message sent successfully!");
        reset();
      })
      .catch((error) => console.error("Error sending message:", error));
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Illustration */}
        <div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center"
        >
          <img
            src={draw}
            alt="Contact Us"
            className="w-3/4"
          />
        </div>

        {/* Contact Form */}
        <form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white dark:bg-gray-700 p-8 rounded-lg  text-center shadow-lg space-y-6"
        >
          <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className="input-field"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="input-field"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              {...register("message", { required: "Message is required" })}
              className="input-field"
              rows="4"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn-primary w-full py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
