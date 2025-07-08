import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loaders from "../Loaders";
import AuthContext from "../../context/AuthContext";
const Content = () => {
    const [type, setType] = useState("owner");
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [email, setEmail] = useState(null);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const {user, setUser} = useContext(AuthContext);

    useEffect(() => {
        setEmail(localStorage.getItem("userEmail"));
    }, [])

    const owner_plans = {
        basic_price: 1199,
        basic_range: "40",
        basic_features: [
            "Basic Analytics",
            "Standard Listing",
            "Email Support",
            "Verification Badge"
        ],
        basic_commision: 2.5,

        standard_price: 2499,
        standard_range: "40",
        standard_features: [
            "Advanced Analytics",
            "Limited Social Ads",
            "Enhanced Visibility",
            "Verification Badge",
        ],
        standard_commision: 2.0,

        premium_price: 4999,
        premium_range: "40-60",
        premium_features: [
            "Top Placement",
            "Pro Media",
            "AR/VR Tours",
            "Relationship Manager",
            "Verification Badge",
        ],
        premium_commision: 1,

        premium_plus_price: 6499,
        premium_plus_range: "40-60",
        premium_plus_features: [
            "All Premium Features",
            "Legal Support",
            "Exclusive Marketing",
            "Verification Badge",
        ],
        premium_plus_commision: 0,
    };

    const agent_plans = {
        basic_price: 499,
        basic_range: "5000",
        basic_features: [
            "Basic Analytics",
            "Standard Listing",
            "Email Support",
            "Verification Badge"
        ],
        basic_commision: 2.5,

        standard_price: 1999,
        standard_range: "5000-15000",
        standard_features: [
            "Advanced Analytics",
            "Limited Social Ads",
            "Enhanced Visibility",
            "Verification Badge",
        ],
        standard_commision: 2.0,

        premium_price: 2999,
        premium_range: "5000-15000",
        premium_features: [
            "Top Placement",
            "Pro Media",
            "AR/VR Tours",
            "Relationship Manager",
            "Verification Badge",
        ],
        premium_commision: 1,

        premium_plus_price: 5999,
        premium_plus_range: "15000-40000",
        premium_plus_features: [
            "All Premium Features",
            "Legal Support",
            "Exclusive Marketing",
            "Verification Badge",
        ],
        premium_plus_commision: 0,
    };

    const rental_plans = {
        basic_price: 499,
        basic_range: "5000",
        basic_features: [
            "Basic Analytics",
            "Standard Listing",
            "Email Support",
            "Verification Badge"
        ],
        basic_commision: 2.5,

        standard_price: 1999,
        standard_range: "5000-15000",
        standard_features: [
            "Advanced Analytics",
            "Limited Social Ads",
            "Enhanced Visibility",
            "Verification Badge",
        ],
        standard_commision: 2.0,

        premium_price: 2999,
        premium_range: "5000-15000",
        premium_features: [
            "Top Placement",
            "Pro Media",
            "AR/VR Tours",
            "Relationship Manager",
            "Verification Badge",
        ],
        premium_commision: 1,

        premium_plus_price: 5999,
        premium_plus_range: "15000-40000",
        premium_plus_features: [
            "All Premium Features",
            "Legal Support",
            "Exclusive Marketing",
            "Verification Badge",
        ],
        premium_plus_commision: 0,
    };


 

    const getPlanData = () => {
        if (type === "owner") return owner_plans;
        if (type === "agent") return agent_plans;
        return rental_plans;
    };

    const handleTypeSelect = (type) => {
        setType(type);
        setSelectedPlan(null);
    };


    const planList = [
        { key: "basic", label: "Basic Plan" },
        { key: "standard", label: "Standard Plan" },
        { key: "premium", label: "Premium Plan" },
        { key: "premium_plus", label: "Premium+ Plan" },
    ];

    const markSubscribed = async (p_id, plan) => {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/payment/markUser`, {
            email : localStorage.getItem("userEmail"),
            payment_id : p_id,
            subscription_type : plan ,
            subscription_date : new Date(),
            status : true
        })
    }


   const handlePay = async (e, planKey) => {
 
    try {
        const token = localStorage.getItem("accessToken");
        setLoader(true);
        // 1. Call backend to create Razorpay order
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/payment/create-order`, {
            amount: e.target.value // ₹10,
            
        },{  headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,});
        console.log(res.data);

        const { orderId, amount, currency } = res.data;

        // 2. Pass orderId into Razorpay options
        const options = {
            key: "rzp_live_EbMOOyVUCDMxKQ", // Only in frontend
            amount: amount,
            currency: currency,
            name: "Aarvasa",
            description: "Aarvasa subscription",
            order_id: orderId, // ✅ Must include this from backend
            handler: function (response) {
                markSubscribed(response.razorpay_payment_id, planKey)
            },
            prefill: {
                name: "Azhan",
                email: email ? email : "please login",
                contact: "Enter mobile number"
            },
            theme: {
                color: "#3399cc"
            }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    } catch (err) {
        if(err.response.status === 401){
            setUser(null);
            navigate("/signin");
        }
    }
    finally{
        setLoader(false);
    }
};



    const PlanCard = ({ planKey, label, onTap }) => {
        const planData = getPlanData();
        const commKey = `${planKey}_commision`;

        return (
            <div className="h-auto transition-all ease-in-out p-10 gap-8 flex flex-col items-center justify-center bg-white rounded-3xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
                <div className="self-stretch text-center justify-start text-stone-900 text-3xl font-semibold font-['Poppins']">{label}</div>
                <div className="flex flex-col gap-4">
                    <select className="px-2 w-full font-[poppins] text-xl text-center outline outline-yellow-300 outline-2 rounded-lg bg-yellow-100">
                        <option value="default" >Select Price Range</option>
                        <option value="10">10,00,000</option>
                        <option value="15">15,00,000</option>
                        <option value="20">20,00,000</option>
                        <option value="25">25,00,000</option>
                        <option value="30">30,00,000</option>
                        <option value="35">35,00,000</option>
                    </select>
                    <div className="self-stretch text-center justify-start text-stone-600 text-xl font-medium  leading-tight">{`<`} INR 40 Lakhs</div>
                </div>
                <div className="justify-start text-black text-lg font-medium  leading-none">
                    Commission: {planData[commKey]}%
                </div>
                <div className="w-32 h-32 px-4 py-11 bg-[radial-gradient(ellipse_113.28%_113.26%_at_56.59%_113.25%,_white_0%,_#EDCE74_100%)] rounded-[65px] cursor-pointer shadow-[0px_0px_45.900001525878906px_0px_rgba(0,0,0,0.25)] outline outline-1 outline-offset-[-1px] outline-black/10 flex flex-col justify-center items-center gap-2.5" onClick={onTap}>
                    <div className="w-24 text-center justify-start"><span className="text-black text-2xl font-medium leading-normal">Tap</span><span className="text-black text-xl font-medium  leading-tight"> </span><span className="text-black text-base font-normal leading-none">for more detail</span></div>
                </div>
            </div>
        );
    };


    const PlanDetail = ({ planKey, label, onClose, value }) => {
        const planData = getPlanData();
        const featuresKey = `${planKey}_features`;
        const commKey = `${planKey}_commision`;
        const price = `${planKey}_price`;
        return (
            <div className="px-4 py-11 relative bg-[radial-gradient(ellipse_132.89%_131.35%_at_55.00%_109.92%,_white_0%,_#EDCE74_100%)]  shadow-[0px_0px_45.900001525878906px_0px_rgba(0,0,0,0.25)] md:w-[400px] h-[600px] p-10 gap-8 flex flex-col items-center justify-center bg-white rounded-3xl">
                <div className="self-stretch text-center justify-center items-center gap-6 flex  ">
                    <div className="text-stone-900 text-2xl font-semibold font-['Poppins']">{label}</div>
                    <div className="text-stone-900 text-2xl font-semibold font-['Poppins']">{planData[price]}<span className="text-stone-700 text-xl font-semibold font-['Poppins']">/month</span></div>
                </div>
                <div className="flex flex-col gap-4">
                    <select className="px-2 w-full font-[poppins] text-xl text-center outline outline-yellow-300 outline-2 rounded-lg bg-yellow-100">
                        <option value="default" >Select Price Range</option>
                        <option value="10">10,00,000</option>
                        <option value="15">15,00,000</option>
                        <option value="20">20,00,000</option>
                        <option value="25">25,00,000</option>
                        <option value="30">30,00,000</option>
                        <option value="35">35,00,000</option>
                    </select>
                    <div className="self-stretch text-center justify-start text-stone-600 text-2xl font-medium  leading-tight">{`<`} INR 40 Lakhs</div>
                </div>
                <div className="w-[280px]   outline outline-2 outline-offset-[-1px] outline-pink-900" />
                <div className="font-[poppins] text-black text-lg font-medium leading-tight flex flex-col items-start gap-4">
                    <h3>Features</h3>
                    <ul className="flex flex-col items-start gap-2">
                        {planData[featuresKey].map((feature, idx) => (
                            <li key={idx} className="text-black text-lg font-medium leading-tight ">✓ {feature}</li>
                        ))}
                    </ul>
                </div>
                <button style={
                    {
                        background: "linear-gradient(to right, #F9EAF1, #8C2841)",

                    }
                } onClick={(e) => {handlePay(e, planKey)}} value={planData[price]} className="w-[240px] h-[56px] px-6 py-3   text-white text-xl font-bold  leading-tight bg-[radial-gradient(ellipse_302.08%_123.50%_at_51.45%_-0.00%,_#6C1E3C_0%)] rounded-xl justify-center items-center gap-2.5">
                    Subscribe
                </button>
                <div className="justify-start text-black text-lg font-medium  leading-none">
                    Commission: {planData[commKey]}%
                </div>
                <button className="absolute top-4 right-4 text-xl bg-none rounded-full px-3 py-1" onClick={onClose}>×</button>
            </div>
        );
    };

    return (
        <motion.div className="font-[poppins] pt-[50px] pb-[100px] transition-all ease-in-out">
            {loader ? <Loaders/> : null}
            <div className="flex flex-col items-center mx-4 gap-7 justify-center">
                <div className="justify-start text-stone-900 text-center text-4xl font-semibold font-['Poppins']">The Perfect plan for your needs</div>
                <div className="lg:w-[1064px] text-center justify-start text-stone-900 md:text-xl font-normal font-['Poppins']">Our transparent pricing makes it easy to find a plan that work in your financial constrain</div>
                <div className="flex gap-3 md:gap-5">
                    <button className={`transform transition-all duration-500ms ease-in hover:text-pink-900 bg-none outline-black text-black md:text-xl md:w-32 md:h-10 px-3 py-[5px] hover:bg-pink-200 rounded-xl outline outline-1 outline-offset-[-1.16px] hover:outline-pink-900/50  justify-center items-center gap-2.5 font-normal leading-tight ${type === 'owner' ? 'outline outline-pink-900/50 bg-pink-200 text-pink-900' : 'outline-black text-black bg-none'}`} onClick={() => handleTypeSelect('owner')}>Owner's</button>
                    <button className={`transform transition-all duration-500ms ease-in hover:text-pink-900 bg-none outline-black text-black md:text-xl md:w-32 md:h-10 px-3 py-[5px] hover:bg-pink-200 rounded-xl outline outline-1 outline-offset-[-1.16px] hover:outline-pink-900/50  justify-center items-center gap-2.5 font-normal leading-tight ${type === 'rental' ? 'outline outline-pink-900/50 bg-pink-200 text-pink-900' : 'outline-black text-black bg-none'}`} onClick={() => handleTypeSelect('rental')}>Rental's</button>
                    <button className={`transform transition-all duration-500ms ease-in hover:text-pink-900 bg-none outline-black text-black md:text-xl md:w-32 md:h-10 px-3 py-[5px] hover:bg-pink-200 rounded-xl outline outline-1 outline-offset-[-1.16px] hover:outline-pink-900/50  justify-center items-center gap-2.5 font-normal leading-tight ${type === 'agent' ? 'outline outline-pink-900/50 bg-pink-200 text-pink-900' : 'outline-black text-black bg-none'}`} onClick={() => handleTypeSelect('agent')}>Agent's</button>
                </div>
                <motion.div className="flex flex-wrap m-4 w-full transition-all ease-in-out justify-center items-center gap-10">
                    <AnimatePresence mode="wait">
                        {planList.map((plan) => (
                            selectedPlan === plan.key ? (
                                <motion.div
                                    key={plan.key}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <PlanDetail
                                        planKey={plan.key}
                                        label={plan.label}
                                        onClose={() => setSelectedPlan(null)}
                                    />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key={plan.key}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <PlanCard
                                        planKey={plan.key}
                                        label={plan.label}
                                        onTap={() => setSelectedPlan(plan.key)}
                                    />
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>


                </motion.div>
            </div>
        </motion.div>
    );
};

export default Content;
