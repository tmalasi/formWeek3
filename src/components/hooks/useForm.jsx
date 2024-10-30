import { useState, useEffect } from "react";

const useForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    age: "",
    gender: "",
    companyName: "",
    companyCode: "",
  });

  //if there is any saved data it updates them with those values
  //this way the user is able to get back to where they left off 
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    const savedStep = JSON.parse(localStorage.getItem("step"));

    if (savedData) setFormData(savedData); 
    if (savedStep) setStep(savedStep); 
  }, []);

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
    localStorage.setItem("step", JSON.stringify(step-1));
  };

  const handleNext = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
    setStep((prevStep) => prevStep + 1);
    localStorage.setItem("step", JSON.stringify(step +1));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    handleNext(formData); 
  };

  return { step, formData, handlePrev, handleChange, handleSubmit };
};

export default useForm;
