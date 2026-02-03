import React, { useState } from 'react';
import { backgroundimage } from '../../utils/images';
import { MyAuth } from "../../context/index";
import { useNavigate } from "react-router-dom";
import LoginForm from '../login-form/index';
import RegisterForm from '../register-form/index';

function LoginPage() {
    const { login } = MyAuth();
    const navigate = useNavigate(); 
    const [activeTab, setActiveTab] = useState('login');
    const [isLoading, setisLoading] = useState(false);

    const handleLogin = (email, password) => {
        setisLoading(true);

        setTimeout(() => {
            login(email, password);   
            setisLoading(false);
            navigate("/profile");     
        }, 2000);
    }; 

    const handleRegister = (userData) => {
        setisLoading(true);

        setTimeout(() => {
            // alert(`Registration successful!\nName: ${userData.name}\nEmail: ${userData.email}`);
            console.log(userData);
            
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
                                    className={`w-1/2 py-2 text-base font-normal font-Open_Sans transition-all ${
                                        activeTab === 'login' ? 'bg-white' : 'bg-transparent'
                                    }`}
                                >
                                    Login
                                </button>
                                <button
                                    onClick={() => setActiveTab('register')}
                                    className={`w-1/2 py-2 text-base font-normal font-Open_Sans transition-all ${
                                        activeTab === 'register' ? 'bg-white' : 'bg-transparent'
                                    }`}
                                >
                                    Register
                                </button>
                            </div>

                            
                            {activeTab === 'login' ? (
                                <LoginForm onLogin={handleLogin} isLoading={isLoading} />
                            ) : (
                                <RegisterForm onRegister={handleRegister} isLoading={isLoading} />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LoginPage;