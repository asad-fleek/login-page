import React, { useState } from 'react'
import { backgroundimage } from '../../utils/images';
import { LoaderCircle } from 'lucide-react';
import { EyeOff, Eye } from 'lucide-react';

function LoginPage() {
    const [isLoading, setisLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleLogin = () => {
        const loginData = {
            email: email,
            password: password,
        };

        console.log('Login data:', loginData);

        setisLoading(true);
        setTimeout(() => {
            alert(`Logged in successfully!\nEmail: ${email}`);
            setisLoading(false);
        }, 2000);
    }

    return (
        <>
            <section>

                <div className='grid grid-cols-12 h-screen overflow-hidden'>
                    <div className='col-span-12 md:col-span-6 hidden md:block'>
                        <div className='w-full rounded-b-lg'>
                            <img src={backgroundimage} alt="bg-imge" className='w-full object-cover' />
                        </div>

                    </div>
                    <div className="col-span-12 md:col-span-6 mt-30">
                        <div className="mx-auto items-center justify-center w-full max-w-md bg-white rounded-lg  p-6">
                            <div className="flex mb-6 rounded-md p-1 overflow-hidden bg-[#EBEDF0]
">
                                <button className="w-1/2 py-2 text-base font-normal bg-white font-Open_Sans">
                                    Login
                                </button>
                                <button className="w-1/2 py-2 text-base font-normal font-Open_Sans">
                                    Register
                                </button>
                            </div>
                            <h2 className="text-xl font-bold font-Open_Sans mb-6 text-[#08090C] font-Inter">Log in to your Account</h2>


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
                                    <button type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                        disabled={isLoading}>
                                        {showPassword ? (
                                            <EyeOff size={20} />
                                        ) : (
                                            <Eye size={20} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="text-right mb-6">
                                <a href="#" className="text-base font-semibold font-Open_Sans text-[#4A5874] hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                            <button onClick={handleLogin} disabled={isLoading} className="w-full text-base font-Open_Sans bg-[#1F4FB6] text-white py-2 rounded-md font-semibold hover:bg-[#1F4FB6]">
                                {isLoading ? (

                                    <LoaderCircle className="animate-spin text-white mx-auto" size={20} />

                                ) :
                                    <span>Login</span>
                                }
                            </button>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default LoginPage;
