import React from "react";
import { useForm } from "react-hook-form";
import pricing from "../assets/pricing.jpg";

const Quote = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      const responseData = await response.json(); // Parse JSON response
      if (response.ok) {
        alert('Quote submitted successfully!');
        reset();
      } else {
        console.error('Error response:', responseData);
        alert(`Failed to submit quote: ${responseData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert(`Network error: ${error.message}`);
    }
  };
  

  return (
    <section
      id="quote"
      className="py-16 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">Get a Quote</h2>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={pricing}
            alt="Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full lg:w-1/2   p-8 text-center rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-black">
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                className="input-field bg-gray-100 border-4"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="projectName" className="block mb-2 font-semibold">
                Project Name
              </label>
              <input
                type="text"
                id="projectName"
                {...register("projectName", { required: "Project name is required" })}
                className="input-field bg-gray-100 border-4"
              />
              {errors.projectName && (
                <p className="text-red-500 text-sm">{errors.projectName.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="budget" className="block mb-2 font-semibold">
                Estimated Budget
              </label>
              <select
                id="budget"
                {...register("budget", { required: "Budget is required" })}
                className="input-field bg-gray-100 border-4"
              >
                <option value="">Select Your Budget</option>
                <option value="15000-39999">Kshs15,000 - Kshs39,999</option>
                <option value="40000-69999">Kshs40,000 - Kshs69,999</option>
                <option value="70000+">Kshs70,000+</option>
              </select>
              {errors.budget && <p className="text-red-500 text-sm">{errors.budget.message}</p>}
            </div>
            <div>
              <label
                htmlFor="functionality"
                className="block mb-2 font-semibold"
              >
                Important Functionality You Want
              </label>
              <textarea
                id="functionality"
                {...register("functionality", { required: "Functionality is required" })}
                className="input-field bg-gray-100 shadow-lg"
                rows="4"
              />
              {errors.functionality && (
                <p className="text-red-500 text-sm">{errors.functionality.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="btn-primary w-full py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Quote;
