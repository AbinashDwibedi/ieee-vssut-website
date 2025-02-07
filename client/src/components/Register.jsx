import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const domains = [
  "IEEE Sensor council",
  "IEEE ComSoc",
  "IEEE CASS",
  "IEEE Computer Society",
];
const nonTechDomains = [
  "Graphic Designing",
  "Video Editing",
  "Content Writing"
]

function Register() {
  const [hintErr, setHintErr] = useState("")
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    regNumber: "",
    branch: "",
    domain: "",
    nonTechDomain:""
  });
  const [divHeight,setdivHeight] = useState(window.innerHeight)
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { fullName, email, phone, regNumber, branch, domain } = formData;

    if (!fullName.trim()) {
      // toast.error("Full Name is required!");
      setHintErr("Full Name is required!")
      return false;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      // toast.error("Invalid Email Address!");
      setHintErr("Invalid Email Address!")
      return false;
    }
    if (!phone.trim() || !/^\d{10}$/.test(phone)) {
      // toast.error("Phone Number must be 10 digits!");
      setHintErr("Phone Number must be 10 digits!")
      return false;
    }
    if (!regNumber.trim()) {
      // toast.error("Registration Number is required!");
      setHintErr("Registration Number is required!")
      return false;
    }
    if (!branch.trim()) {
      // toast.error("Branch is required!");
      setHintErr("Branch is required!")
      return false;
    }
    if (!domain.trim()) {
      // toast.error("Please select a Domain!");
      setHintErr("Please select a Domain!")
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        setIsCreating(true);
        const { data } = await axios.post("https://ieee-vssut.vercel.app/api/domain/register", formData);
        // const { data } = await axios.post("http://localhost:3000/api/domain/register", formData);
        setSubmitted(data.status);
        if (data.status) {
          // toast.success("Form submitted successfully 👍");
          setHintErr("Form submitted successfully 👍")
          return
        }
        // toast.error(data.message);
        setHintErr(data.message)
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          regNumber: "",
          branch: "",
          domain: "",
        });
      } catch (error) {
        console.log("Something went wrong");
      } finally {
        setIsCreating(false);
      }
    }
  };

  useGSAP(()=>{
    gsap.from(".register-div div",{
      duration:0.5,
      scale:0,
      filter:"blur(10px)",
      opacity:0
    })
  },[])
  return (
    <div className="register-div ">
      <div style={{minHeight:`${divHeight}px`}} className="flex items-center justify-center ">
      <form
        className="bg-white  rounded-xl p-8 max-w-lg w-full"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-primary">
          Register 📝
        </h1>

        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            <i className="fas fa-user text-primary mr-2"></i>
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your Full Name"
            className="pl-2 mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            <i className="fas fa-envelope text-primary mr-2"></i>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="test@gmail.com"
            className="pl-2 mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            <i className="fas fa-phone-alt text-primary mr-2"></i>
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="1234567890"
            className="pl-2 mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="regNumber" className="block text-sm font-medium text-gray-700">
            <i className="fas fa-id-card text-primary mr-2"></i>
            Registration Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="regNumber"
            name="regNumber"
            value={formData.regNumber}
            onChange={handleChange}
            placeholder="Your College Registration Number"
            className="pl-2 mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
            <i className="fas fa-school text-primary mr-2"></i>
            Branch <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            placeholder="Your Branch"
            className="pl-2 mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="domain" className="block text-sm font-medium text-gray-700">
            <i className="fas fa-cogs text-primary mr-2"></i>
            Choose Domains <span className="text-red-500">*</span>
          </label>
          <select
            id="domain"
            name="domain"
            value={formData.domain}
            onChange={handleChange}
            className="pl-2 my-4 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary bg-white"
          >
            <option value="" disabled>
              Select Domain
            </option>
            {domains.map((domain, index) => (
              <option key={index} value={domain}>
                {domain}
              </option>
            ))}
          </select>
          <select
            id="nonTechDomain"
            name="nonTechDomain"
            value={formData.nonTechDomain}
            onChange={handleChange}
            className="pl-2 mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary bg-white"
          >
            <option value="" disabled>
              Select nonTechDomain
            </option>
            {nonTechDomains.map((nonTechDomain, index) => (
              <option key={index} value={nonTechDomain}>
                {nonTechDomain}
              </option>
            ))}
          </select>
        </div>
        {hintErr && <div className="text-md text-primary text-center p-2 font-bold">{hintErr}</div>}
        <button
          type="submit"
          className="w-full bg-primary hover:bg-secondary text-white font-semibold py-2 px-4 rounded-md transition-all"
        >
          
          {isCreating ? <i className="fa-solid animate-spin fa-spinner"></i> : "Register 🚀"}
        </button>
      </form>
      <ToastContainer />
    </div>
    </div>
  );
}

export default Register;
