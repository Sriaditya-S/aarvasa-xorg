import React, { useState } from 'react'
import { History, BadgeIndianRupee, Heart, Mic, Book, FileText, Calculator, Plus } from 'lucide-react'
import Page from '../../components/listing/Page'
import NavbarRaw from '../../components/NavbarRaw'
import Footer from '../../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import AuthContext from '../../context/AuthContext'
import { useContext } from 'react'
const MainProfile = () => {

  const navigate = useNavigate();
  const { user, fetchUser } = useContext(AuthContext);

  useEffect(() => {
    fetchUser();
  }, [])



  const today = new Date();
  // Format as "Friday, 31 Mar 2025"
  const options = { weekday: 'long', day: '2-digit', month: 'short', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-IN', options);
  return (
    <>
      {user ? <div className=' h-auto lg:h-[100vh] flex-col flex'>

        <div className='w-[85%] mx-auto'>

          <h1 className='text-2xl font-semibold mt-8'>Welcome , {user.email}</h1>
          <p className='mt-2'>{formattedDate} </p>
        </div>
        <div className='w-[85%] h-[70%] pb-8 mt-4 mx-auto h-full bg-white border border-2 rounded-lg transition-all hover:border-[#8C2841]'>
          <div className="text_content gap-8 md:gap-0 flex items-center justify-between flex-wrap px-12 py-4">
            <div className="left_section flex flex-wrap justify-center md:justify-start items-center gap-4">
              <div className="profile">
               {user.photo ?  <img
                  src={user.photo 
                  }
                  alt="Profile"
                  className="w-8 h-8 md:w-16 md:h-16 rounded-full object-cover"
                /> :
                 <div className="w-12 h-12 rounded-full bg-[#8C2841] text-white flex items-center justify-center text-xl font-bold">
                    {user.email.charAt(0).toUpperCase()}
                  </div> }

              </div>
              <div className="text text-center md:text-start">
                <p>{user.email}</p>
                <p className='text-sm mt-2 sm:mt-2 text-xl font-semibold'>Subscribtion type : {user.is_subscribed ? user.subscription_type + " Plan" : "Currently you have no plan ."}</p>
              </div>
            </div>
            <button className='w-full md:w-auto border border-4 border-[#8C2841] hover:bg-[#8C2841] hover:border-[#F7A240] shadow-xl hover:transform hover:scale-[1.1] hover:rotate-[5deg] hover:text-white transition-all px-8 p-1'>Edit</button>
          </div>


          <hr className='w-[85%] mx-auto border border-1 border-b-gray-300' />

          <div className='boxes flex items-center justify-center lg:justify-start gap-5 mx-12 flex-wrap mt-8'>
            <Link to={"/profile/activity"}>
              <div className="activity min-w-[220px] cursor-pointer rounded-lg group hover:bg-[#8C2841] hover:transform hover:scale-[1.1]  hover:text-white transition-all bg-[#F9EAF1] flex items-center justify-center gap-3 flex-col p-12">
                <History size={32} className='text-gray-700 group-hover:text-white' />
                <p>My Activity</p>
              </div></Link>

            <Link to={"/profile/transaction"}>
              <div className="activity min-w-[220px] cursor-pointer rounded-lg group bg-[#F9EAF1] hover:bg-[#8C2841] hover:transform hover:scale-[1.1] transition-all hover:text-white flex items-center justify-center flex-col p-12 gap-3">
                <BadgeIndianRupee size={32} className='text-gray-700 group-hover:text-white' />
                <p>Transactions</p>
              </div>
            </Link>

            <Link to={"/profile/favourites"}>
              <div className="activity min-w-[220px] cursor-pointer rounded-lg group bg-[#F9EAF1] hover:bg-[#8C2841] hover:transform hover:scale-[1.1] transition-all  hover:text-white flex items-center justify-center flex-col p-12 gap-3">
                <Heart size={32} className='text-gray-700 group-hover:text-white' />
                <p>Favourite</p>
              </div></Link>

            <Link to={"/profile/contactagents"}>
              <div className="activity min-w-[220px] cursor-pointer rounded-lg group bg-[#F9EAF1] hover:bg-[#8C2841] hover:transform hover:scale-[1.1] transition-all hover:text-white flex items-center justify-center flex-col p-12 gap-3">
                <Mic size={32} className='text-gray-700 group-hover:text-white' />
                <p>Agents</p>
              </div></Link>

            <Link to={"/profile/guides"}> <div className="activity min-w-[220px] cursor-pointer rounded-lg group bg-[#F9EAF1] hover:bg-[#8C2841] hover:transform hover:scale-[1.1] transition-all hover:text-white flex items-center justify-center flex-col p-12 gap-3">
              <Book size={32} className='text-gray-700 group-hover:text-white' />
              <p>Guides</p>
            </div> </Link>

            <Link to={"/news"}>
              <div className="activity min-w-[220px] cursor-pointer rounded-lg group bg-[#F9EAF1] hover:bg-[#8C2841] hover:transform hover:scale-[1.1] transition-all hover:text-white flex items-center justify-center flex-col p-12 gap-3">
                <FileText size={32} className='text-gray-700 group-hover:text-white' />
                <p>News / Articles</p>
              </div></Link>

            <Link to={"/tools/budgetcalculator"}>
              <div className="activity min-w-[220px] cursor-pointer rounded-lg group bg-[#F9EAF1] hover:bg-[#8C2841] hover:transform hover:scale-[1.1] transition-all hover:text-white flex items-center justify-center flex-col p-12 gap-3">
                <Calculator size={32} className='text-gray-700 group-hover:text-white' />
                <p>Tools</p>
              </div></Link>

            <Link to={"/subscription"}>

              <div className="activity min-w-[220px] cursor-pointer rounded-lg group bg-[#F9EAF1] hover:bg-[#8C2841] hover:transform hover:scale-[1.1] transition-all hover:text-white flex items-center justify-center flex-col p-12 gap-3">
                <Plus size={32} className='text-gray-700 group-hover:text-white' />
                <p>Subscribe</p>
              </div>
            </Link>
          </div>

        </div>
      </div> : null}

    </>
  )
}

export default MainProfile
