import React, { useState } from 'react'
import { Heading } from '../Utils/Heading'
import Loaders from '../Loaders';
import { useRef } from 'react';

const ContactUs = ({ref}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: ''
  });
  const [loader, setLoader] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoader(true);
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus(true);
        setFormData({ name: '', email: '', date: '' });
      } else {
        setStatus(false);
      }
    } catch (err) {
      console.error(err);
      setStatus('Something went wrong. Please try again later.');
    }
    finally{
      setLoader(false);
    }
  };

  return (
    <div className="mx-2 mt-8 mb-8" ref={ref}>
      {loader ? <Loaders/> : null}
      <Heading label="Contact Us" />
      <div className="flex md:px-28 items-center flex-wrap lg:flex-nowrap relative justify-center lg:justify-between w-full h-auto md:p-8 bg-gradient-to-b from-[#C9B391] to-[#A79475] rounded-2xl p-2 lg:gap-10">
        <div className="inline-block w-[769px] md:block">
          <img
            src="conhouse.png"
            alt="house_img"
            className="w-full lg:w-[700px] left-[-20px] lg:top-[-80px] xl:absolute animate-pulse duration-1000"
          />
        </div>
        <div className="xl:w-[40%] w-full">
          <form className="flex flex-col gap-6 rounded-xl" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-pink-900 text-md md:text-xl font-['Poppins']">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="py-2 px-4 bg-white/80 w-full rounded-lg border border-pink-900/30 focus:outline-none focus:border-pink-900"
                placeholder="Your name"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-pink-900 text-md md:text-xl font-['Poppins']">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="h-12 px-4 bg-white/80 rounded-lg border border-pink-900/30 focus:outline-none focus:border-pink-900"
                placeholder="Your email address"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-pink-900 text-md md:text-xl font-['Poppins']">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="h-12 px-4 bg-white/80 w-full rounded-lg border border-pink-900/30 focus:outline-none focus:border-pink-900"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 h-14 bg-[#6C1E3C] rounded-lg text-white text-md font-semibold py-3 hover:opacity-90 transition-opacity"
            >
              {status==='' ?"Schedule a Consultation" : status ? "Form submitted ✅" : "Submission failed"}
            </button>

            
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
