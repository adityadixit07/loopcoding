import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    creditCardNumber: "",
    expirationDate: "",
    cvv: "",
    discountCode: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleAcceptTerms = () => {
    setAcceptedTerms(true);
    setShowTermsModal(false);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (acceptedTerms) {
      console.log("Form submitted!");
    } else {
      setShowTermsModal(true);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <form onSubmit={handleSubmitForm} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="fullName" className="block font-semibold mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-semibold mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block font-semibold mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="creditCardNumber" className="block font-semibold mb-1">
          Credit Card Number
        </label>
        <input
          type="text"
          id="creditCardNumber"
          name="creditCardNumber"
          value={formData.creditCardNumber}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div className="flex justify-between mb-4">
        <div className="w-1/2 mr-2">
          <label htmlFor="expirationDate" className="block font-semibold mb-1">
            Expiration Date
          </label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="w-1/2 ml-2">
          <label htmlFor="cvv" className="block font-semibold mb-1">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="discountCode" className="block font-semibold mb-1">
          Discount Code
        </label>
        <input
          type="text"
          id="discountCode"
          name="discountCode"
          value={formData.discountCode}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <input
          type="checkbox"
          id="termsAccepted"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
          className="mr-2"
        />
        <label htmlFor="termsAccepted" className="font-semibold">
          I accept the{" "}
          <button onClick={openModal} className="text-blue-500 underline">
            terms and conditions
          </button>
        </label>
      </div>
      <button
        // type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Purchase Now
      </button>
      {isModalOpen && <TermsModal onClose={closeModal} />}

      {showTermsModal && (
        <TermsModal
          onClose={() => setShowTermsModal(false)}
          onAccept={handleAcceptTerms}
        />
      )}
    </form>
  );
};

export default Form;

export const TermsModal = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Terms and Conditions</h2>
        <p className="mb-4 text-gray-700">
          By accessing this course, you agree to abide by the terms and
          conditions set forth herein. You must not share your course access
          with others or distribute course materials without explicit consent
          from the course provider.
        </p>
        <p className="mb-4 text-gray-700">
          We reserve the right to revoke access to the course in case of
          violation of the terms and conditions or any inappropriate behavior.
        </p>
        <p className="mb-4 text-gray-700">
          Please read the full terms and conditions carefully before proceeding.
        </p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};
