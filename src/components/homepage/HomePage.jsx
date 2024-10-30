import React, { useState } from "react";
import Form1 from "../forms/form1/Form1";
import useForm from "../hooks/useForm";
import Form2 from "../forms/form2/Form2";
import Form3 from "../forms/form3/Form3";
import "./Form.css";

const HomePage = () => {
  const { step, formData, handlePrev, handleChange, handleSubmit } = useForm();
  return (
    <div className="home-container">
      <div>
        {step === 1 && (
          <Form1
            formData={formData}
            handleChange={handleChange}
          />
        )}
        {step === 2 && (
          <Form2
            formData={formData}
            handleChange={handleChange}
          />
        )}
        {step === 3 && (
          <Form3
            formData={formData}
            handleChange={handleChange}
          />
        )}
        {step === 4 && (
          <>
            <p>Thank you for completing the form.</p>
          </>
        )}
      </div>
      <div>
        {(step == 2 || step == 3) && (
          <button onClick={handlePrev}>Previous</button>
        )}
        {step != 4 && <button onClick={handleSubmit}>Next</button>}
        {step == 4 && (
          <button
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default HomePage;
