import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Questions = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);

  const resetForm = () => {
    setQuestions("");
    setDesc("");
    setImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!questions.trim() || !desc.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("question", questions);
      formData.append("description", desc);
      if (image) formData.append("image", image);

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/question`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (res.status === 201 || res.status === 200) {
        alert("Question submitted successfully!");
        resetForm();
        navigate("/");
      } else {
        alert("Failed to submit question.");
      }
    } catch (err) {
      console.error("Error submitting question:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-orange-50 pt-[120px] pb-20 p-10">
      <div className="flex flex-col lg:flex-row justify-center lg:gap-16 xl:gap-20 2xl:gap-24 items-center max-w-7xl mx-auto">
        <div className="mb-8 lg:mb-0 flex-shrink-0">
          <img src="conhouse.png" alt="FAQ" className="w-80 h-80 object-contain" />
        </div>
        <div className="flex flex-col items-center justify-center w-full max-w-md">
          <div className="flex justify-center items-center mb-6">
            <h1 className="text-3xl font-bold text-center">Post Your Question</h1>
            <img src="mobile.png" alt="Mobile" className="w-12 h-12 ml-2" />
          </div>
          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={e => setQuestions(e.target.value)}
              value={questions}
              required
              placeholder="❝How can I get a home loan with low credit score❞"
              className="bg-[#8C2841] h-[50px] w-full p-4 text-white rounded-lg placeholder:text-white placeholder:text-xs"
            />
            <textarea
              value={desc}
              onChange={e => setDesc(e.target.value)}
              required
              placeholder="Describe your question here"
              className="bg-[#8C2841] h-[150px] p-4 rounded-lg text-white placeholder:text-white resize-none"
            />
            <div className="flex gap-4">
              <input
                type="file"
                accept="image/*"
                onChange={e => setImage(e.target.files[0])}
                className="bg-[#8C2841] h-[40px] w-[100px] p-2 rounded-lg text-white text-xs"
              />
              <button
                type="button"
                onClick={resetForm}
                className="bg-[#8C2841] h-[40px] w-[150px] px-4 rounded-lg text-white text-xs hover:bg-[#6B1F31]"
              >
                Reset
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" className="accent-[#8C2841]" />
              <label className="text-xs text-black">Notify me when someone answers</label>
            </div>
            <button
              type="submit"
              className="bg-[#8C2841] h-[50px] w-full p-4 text-white rounded-lg hover:bg-[#6B1F31] font-medium"
            >
              Submit your question
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Questions;
