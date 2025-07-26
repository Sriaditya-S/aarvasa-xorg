import React from 'react'
import {useState,useEffect} from 'react'
import { useNavigate,Link } from 'react-router-dom'

const AiButton = () => {
    const [visibility,setVisibility]=useState(false);

    useEffect(()=>{
        const onScroll=()=>{
            setVisibility(window.scrollY>200);
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    },[])

  return (
    
        <div
            
            
            className={`fixed bottom-20 right-6 z-50 h-12 w-12 rounded-full bg-pink-800 p-3 shadow-lg transition-opacity duration-300 ${visibility ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
        >
                <Link to={"/chat"}>
                    {/* You can use an icon or text here */}
                    <span role="img" aria-label="AI Chat" >🤖</span>
                </Link>
        </div>
    
  )
}

export default AiButton