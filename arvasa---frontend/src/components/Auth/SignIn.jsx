import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { MdPassword } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loaders from '../Loaders';

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    //  Check for Google Auth tokens in URL on first render
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const accessToken = params.get("accessToken");
        const refreshToken = params.get("refreshToken");

        if (accessToken && refreshToken) {
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            alert("Google Login Successful!");
            navigate("/"); // Navigate to homepage
        }
    }, [navigate]);

    const handleSignin = async () => {
        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        try {
            setLoader(true);

            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
                email,
                password
            }, { withCredentials: true });

            const { username, accessToken, refreshToken, is_subscribed, plan } = res.data;

            if (accessToken && refreshToken) {
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", refreshToken);
                // localStorage.setItem("userEmail", email);
                alert("Login successful!");
                window.location.href = "/";
            } else {
                alert("Tokens not received.");
            }
        } catch (err) {
            console.error("Login error:", err);
            alert(err.response?.data?.message);
        }
        finally {
            setLoader(false);
        }
    };

    const handleGoogleLogin = () => {

        window.location.href = `${import.meta.env.VITE_BACKEND_URL}/api/auth/google`;
    };

    const handleForgotPassword = async () => {
        if (!email) {
            alert("Please enter your email before requesting a password reset.");
            return;
        }

        try {
            setLoader(true);

            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/request-reset`, { email });
            localStorage.setItem("resetEmail", email);
            alert("OTP sent to your email.");
            navigate("/forgot-password");
        } catch (err) {
            alert(err.response?.data?.message || "Failed to send OTP.");
        }
        finally {
            setLoader(false);
        }
    };

    return (
        <>
            {loader ? <Loaders /> : null}
            <motion.div
                className="bg-[#ffffff] justify-center items-center">
                {/* Main Content Container (Flex to hold left and right sections) */}
                <div className="flex items-center flex-row flex-row-reverse justify-between overflow-hidden">


                    {/* Left Section: Login Form */}
                    <div className="flex items-center h-[100vh] justify-center flex-col w-full p-4 md:w-[28%] mx-auto">
                        <a href="#" className='flex relative right-8 items-center'>
                            <img src="/images/logo_shape.png" className='w-32' alt="logo" />
                            <img src="/images/image.png" className='w-32' alt="text" />
                        </a>

                        <div className="flex flex-col gap-[25px] pt-6">
                            <div className="text-[#0C1421] text-[32px] mb-4 font-bold leading-8">Welcome Back</div>
                        </div>

                        <div className="flex flex-col gap-4 w-full">
                            <div className="w-full h-12 relative">
                                {email.length === 0 && (
                                    <span className="absolute z-[1] top-3 px-4 flex items-center text-gray-400 gap-4 pointer-events-none">
                                        <Mail />
                                        Enter Email
                                    </span>
                                )}
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full z-[999] h-full px-4 rounded-xl border border-[#6C1E3C] bg-[#F7FAFF] placeholder-[#8898A8] focus:outline-none focus:border-[#A82E4F]"
                                />
                            </div>

                            <div className="w-full h-12 relative">
                                {password.length === 0 && (
                                    <span className="absolute top-3 px-4 flex items-center text-gray-400 gap-4 pointer-events-none">
                                        <MdPassword />
                                        Enter Password
                                    </span>
                                )}
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full h-full px-4 rounded-xl border border-[#6C1E3C] bg-[#F7FAFF] placeholder-[#8898A8] focus:outline-none focus:border-[#A82E4F]"
                                />
                            </div>

                            <a onClick={handleForgotPassword} className="text-blue-500 mt-2 mb-2 text-base font-normal block underline cursor-pointer">
                                Forgot Password?
                            </a>

                            <button
                                onClick={handleSignin}
                                className="w-full h-[52px] bg-[#6C1E3C] rounded-xl flex items-center justify-center transition duration-300 ease-in-out hover:bg-[#7d2a48] hover:scale-105">
                                <span className="text-white text-base font-bold">Sign in</span>
                            </button>
                        </div>

                        <div className="flex flex-col gap-2 w-full mt-[20px]">
                            <div className="flex items-center gap-4">
                                <div className="flex-grow border-t border-[#CEDAE2]"></div>
                                <div className="text-[#294957] text-base font-normal">Or</div>
                                <div className="flex-grow border-t border-[#CEDAE2]"></div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <button
                                    onClick={handleGoogleLogin}
                                    className="w-full group h-[52px] bg-white border border-gray-600 shadow-lg rounded-xl flex items-center justify-center gap-4
                                transition duration-300 ease-in-out hover:bg-[#6C1E3C] hover:scale-105">
                                    <img
                                        src="https://cdn.iconscout.com/icon/free/png-256/free-google-logo-icon-download-in-svg-png-gif-file-formats--brands-pack-logos-icons-189824.png?f=webp&w=256"
                                        alt="Google Icon"
                                        className="w-7 h-7"
                                    />
                                    <span className="text-black group-hover:text-white text-base font-normal">Sign in with Google</span>
                                </button>
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <span className="text-[#555] text-sm font-normal">Don't have an account? </span>
                            <Link to={'/signup'} className="text-[#1D4ED8] text-sm font-normal cursor-pointer underline">
                                Sign up
                            </Link>
                        </div>

                        <div className="text-center text-sm text-[#555] font-semibold mt-4 mx-auto mb-2">
                            By signing in to Aarvasa, you agree to the Terms of Service. View our Privacy Policy.
                        </div>
                    </div>

                    <div className="relative w-[50%] h-[100vh] bg-[#FCEBB8] hidden sm:block">
                        <img src="/login.jpg" className='w-full h-full object-cover' alt="" />
                    </div>
                </div>
            </motion.div>
        </>
    );
}
