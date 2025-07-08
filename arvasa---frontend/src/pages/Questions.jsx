import React from 'react'
import Page from '../components/listing/Page'
import { useNavigate } from 'react-router-dom'
import { useState,} from 'react'

const Questions = () => {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState("");
  const [desc,setDesc] = useState("");
  const [image,setImage] = useState("");

  const resetForm = () =>{
    setQuestions("");
    setDesc("");
    setImage("");
  }

const handleSubmit = (e) => {
    e.preventDefault();
    if (!questions.trim() || !desc.trim()) {
        alert("Please fill in all required fields.");
        return;
    }
    navigate('/');
};

return (
    <div className="bg-orange-50 pt-[120px] pb-20 p-10">
        <div className="flex flex-col lg:flex-row justify-center lg:gap-16 xl:gap-20 2xl:gap-24 items-center max-w-7xl mx-auto">
            
            <div className="mb-8 lg:mb-0 flex-shrink-0">
                <img 
                    src="conhouse.png" 
                    alt="FAQ" 
                    className="w-80 h-80 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain" 
                />
            </div>
            
            
            <div className="flex flex-col items-center justify-center w-full max-w-md">
                <div className="flex justify-center items-center mb-6">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">Post Your Question</h1>
                    <img 
                        src="mobile.png" 
                        alt="Mobile" 
                        className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 ml-2" 
                    />
                </div>
                
                <div className="w-full">
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            onChange={e => setQuestions(e.target.value)} 
                            value={questions} 
                            required 
                            placeholder="e.g., ❝How can i get a home loan with low credit score❞"  
                            className="bg-[#8C2841] h-[50px] w-full p-4 text-white outline-none rounded-lg placeholder:text-white placeholder:text-xs"
                        />
                        
                        <textarea 
                            value={desc} 
                            onChange={e => setDesc(e.target.value)} 
                            required 
                            placeholder="Describe your question here" 
                            className="bg-[#8C2841] h-[150px] w-full p-4 outline-none rounded-lg text-white placeholder:text-white placeholder:text-xs resize-none"
                        />
                        
                        <div className="flex gap-4">
                            <input 
                                onChange={e => setImage(e.target.files[0])} 
                                type="file" 
                                accept="image/*" 
                                className="bg-[#8C2841] h-[40px] w-[100px] flex-1 p-2 outline-none rounded-lg text-white text-xs file:bg-transparent file:border-0 file:text-white file:text-xs"
                            />
                            
                            <button 
                                type="button" 
                                onClick={resetForm} 
                                className="bg-[#8C2841] h-[40px] w-[150px] px-4 outline-none rounded-lg text-white text-xs hover:bg-[#6B1F31] transition-colors"
                            >
                                Reset
                            </button>
                        </div> 
                        
                        <div className="flex gap-2 justify-center items-center">
                            <input type="checkbox" className="accent-[#8C2841]" />
                            <label className="text-xs text-black">Notify me when someone answers</label>
                        </div>
                        
                        <button 
                            type="submit" 
                            className="bg-[#8C2841] h-[50px] w-full p-4 text-white outline-none rounded-lg hover:bg-[#6B1F31] transition-colors font-medium"
                        >
                            Submit your question
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
)
}

export default Questions