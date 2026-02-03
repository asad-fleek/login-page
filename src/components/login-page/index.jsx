import React, { useState } from 'react'
import { backgroundimage } from '../../utils/images';
import { LoaderCircle, EyeOff, Eye } from 'lucide-react';
import { MyAuth } from "../../context/index";
import { useNavigate } from "react-router-dom";


function LoginPage() {
    const { login } = MyAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('login');
    const [isLoading, setisLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const handleLogin = () => {
        if (!email || !password) {
            alert("Please enter email and password");
            return;
        }

        setisLoading(true);

        setTimeout(() => {
            login(email, password);
            setisLoading(false);
            navigate("/profile");
        }, 2000);
    };

    const handleRegister = () => {
        if (!registerName || !registerEmail || !registerPassword || !confirmPassword) {
            alert("Please fill in all fields");
            return;
        }

        if (registerPassword !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (!agreeToTerms) {
            alert("Please accept the Terms & Conditions");
            return;
        }

        setisLoading(true);

        setTimeout(() => {

            alert(`Registration successful!\nName: ${registerName}\nEmail: ${registerEmail}`);
            setisLoading(false);

            setActiveTab('login');
        }, 2000);
    };


    return (
        <>
            <section>
                <div className='grid grid-cols-12 h-screen overflow-hidden'>
                    <div className='col-span-12 md:col-span-6 hidden md:block'>
                        <div className='w-full rounded-b-lg'>
                            <img src={backgroundimage} alt="bg-imge" className='w-full object-cover h-screen' />
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 flex items-center justify-center p-6">
                        <div className="w-full max-w-md bg-white rounded-lg p-6">

                            <div className="flex mb-6 rounded-md p-1 overflow-hidden bg-[#EBEDF0]">
                                <button
                                    onClick={() => setActiveTab('login')}
                                    className={`w-1/2 py-2 text-base font-normal font-Open_Sans transition-all ${activeTab === 'login' ? 'bg-white' : 'bg-transparent'
                                        }`}
                                >
                                    Login
                                </button>
                                <button
                                    onClick={() => setActiveTab('register')}
                                    className={`w-1/2 py-2 text-base font-normal font-Open_Sans transition-all ${activeTab === 'register' ? 'bg-white' : 'bg-transparent'
                                        }`}
                                >
                                    Register
                                </button>
                            </div>


                            {activeTab === 'login' && (
                                <div className="animate-fadeIn">
                                    <h2 className="text-xl font-bold font-Open_Sans mb-6 text-[#08090C] font-Inter">
                                        Log in to your Account
                                    </h2>

                                    <div className="mb-4">
                                        <label className="block text-base font-medium text-[#08090C] leading-6 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            disabled={isLoading}
                                            placeholder="example@mail.com"
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-base font-medium text-[#08090C] leading-6 mb-1">
                                            Password
                                        </label>
                                        <div className='relative'>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Enter your password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                disabled={isLoading}
                                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                                disabled={isLoading}
                                            >
                                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="text-right mb-6">
                                        <a href="#" className="text-base font-semibold font-Open_Sans text-[#4A5874] hover:underline">
                                            Forgot Password?
                                        </a>
                                    </div>

                                    <button
                                        onClick={handleLogin}
                                        disabled={isLoading}
                                        className="w-full text-base font-Open_Sans bg-[#1F4FB6] text-white py-2 rounded-md font-semibold hover:bg-[#1a3d8f] transition-colors"
                                    >
                                        {isLoading ? (
                                            <LoaderCircle className="animate-spin text-white mx-auto" size={20} />
                                        ) : (
                                            <span>Login</span>
                                        )}
                                    </button>
                                </div>
                            )}


                            {activeTab === 'register' && (
                                <div className="animate-fadeIn">
                                    <h2 className="text-xl font-bold font-Open_Sans mb-6 text-[#08090C] font-Inter">
                                        Create your Account
                                    </h2>

                                    <div className="mb-4">
                                        <label className="block text-base font-medium text-[#08090C] leading-6 mb-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            value={registerName}
                                            onChange={(e) => setRegisterName(e.target.value)}
                                            disabled={isLoading}
                                            placeholder="John Doe"
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-base font-medium text-[#08090C] leading-6 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={registerEmail}
                                            onChange={(e) => setRegisterEmail(e.target.value)}
                                            disabled={isLoading}
                                            placeholder="example@mail.com"
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-base font-medium text-[#08090C] leading-6 mb-1">
                                            Password
                                        </label>
                                        <div className='relative'>
                                            <input
                                                type={showRegisterPassword ? "text" : "password"}
                                                placeholder="Create a password"
                                                value={registerPassword}
                                                onChange={(e) => setRegisterPassword(e.target.value)}
                                                disabled={isLoading}
                                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                                disabled={isLoading}
                                            >
                                                {showRegisterPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-base font-medium text-[#08090C] leading-6 mb-1">
                                            Confirm Password
                                        </label>
                                        <div className='relative'>
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                placeholder="Confirm your password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                disabled={isLoading}
                                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                                disabled={isLoading}
                                            >
                                                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleRegister}
                                        disabled={isLoading}
                                        className="w-full text-base font-Open_Sans bg-[#1F4FB6] text-white py-2 rounded-md font-semibold hover:bg-[#1a3d8f] transition-colors"
                                    >
                                        {isLoading ? (
                                            <LoaderCircle className="animate-spin text-white mx-auto" size={20} />
                                        ) : (
                                            <span>Register</span>
                                        )}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default LoginPage;
