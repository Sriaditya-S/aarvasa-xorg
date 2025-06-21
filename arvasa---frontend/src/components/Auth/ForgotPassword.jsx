import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPassword = () => {
    const inputRefs = useRef([]);
    const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [activeInput, setActiveInput] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const storedEmail = localStorage.getItem("resetEmail");
        if (!storedEmail) {
            alert("No email found. Redirecting to Sign In.");
            navigate("/signin");
        } else {
            setEmail(storedEmail);
        }
    }, [navigate]);

    const handleInput = (e, index) => {
        const value = e.target.value;
        if (!/^\d?$/.test(value)) return;

        const updatedOtp = [...otpValues];
        updatedOtp[index] = value;
        setOtpValues(updatedOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleReset = async () => {
        const otp = otpValues.join("");

        if (!otp || !newPassword || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/reset-password`, {
                email,
                otp,
                newPassword
            });
            alert("Password reset successful. Please login.");
            localStorage.removeItem("resetEmail");
            navigate("/signin");
        } catch (err) {
            alert(err.response?.data?.message || "Reset failed.");
        }
    };

    return (
        <div className="bg-white h-[100vh] overflow-y-hidden">
            <div className="cols h-[90vh] sm:h-auto flex items-center m-2 justify-center sm:justify-between gap-[70px]">
                <div className="left_col w-1/2 items-center justify-center hidden sm:flex">
                    <img
                        src="/otp_hero.jpg"
                        className="h-[98vh] rounded-lg w-full object-cover"
                        alt=""
                    />
                </div>

                <div className="right_col w-1/2 flex flex-col items-center text-center justify-center gap-6">
                    <img src="/images/logo.png" className="w-32" alt="" />
                    <h1 className="font-semibold text-5xl">Reset Password</h1>
                    <p className="text-md">
                        Enter the OTP sent to <br />
                        <span className="font-semibold">{email}</span>
                    </p>

                    <div className="input_boxes flex items-center justify-center gap-4">
                        {[0, 1, 2, 3, 4, 5].map((_, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type="text"
                                maxLength={1}
                                value={otpValues[index]}
                                onChange={(e) => handleInput(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className={`bg-[#EFEFEF] w-[60px] text-center rounded-lg outline-none text-2xl h-[60px] border-2 transition-all ${activeInput === index
                                    ? 'border-[#6D1E3D]'
                                    : 'border-gray-300'
                                    }`}
                                onFocus={() => setActiveInput(index)}
                            />
                        ))}
                    </div>

                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="p-2 border border-gray-400 rounded w-full max-w-sm"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="p-2 border border-gray-400 rounded w-full max-w-sm"
                    />
                    <button
                        onClick={handleReset}
                        className="bg-[#6D1E3D] outline-none transition-all rounded-full px-12 p-2 text-white hover:bg-white border border-4 hover:border-[#6D1E3D] hover:text-black"
                    >
                        Reset Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
