import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LoaderCircle, EyeOff, Eye } from 'lucide-react';

const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required')
});

function LoginForm({ onLogin, isLoading }) {
    const [showPassword, setShowPassword] = useState(false);

    const initialValues = {
        email: '',
        password: ''
    };

    const handleSubmit = (values) => {
        onLogin(values.email, values.password);
    };

   return (
        <div className="animate-fadeIn">
            <h2 className="text-xl font-bold font-Open_Sans mb-6 text-[#08090C] font-Inter">
                Log in to your Account
            </h2>

            <Formik
                initialValues={initialValues}
                validationSchema={loginValidationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="mb-4">
                            <label className="block text-base font-medium text-[#08090C] leading-6 mb-1">
                                Email
                            </label>
                            <Field
                                type="email"
                                name="email"
                                disabled={isLoading}
                                placeholder="example@mail.com"
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.email && touched.email ? 'border-red-500' : ''
                                }`}
                            />
                            <ErrorMessage 
                                name="email" 
                                component="div" 
                                className="text-red-500 text-sm mt-1" 
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-base font-medium text-[#08090C] leading-6 mb-1">
                                Password
                            </label>
                            <div className='relative'>
                                <Field
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter your password"
                                    disabled={isLoading}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                        errors.password && touched.password ? 'border-red-500' : ''
                                    }`}
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
                            <ErrorMessage 
                                name="password" 
                                component="div" 
                                className="text-red-500 text-sm mt-1" 
                            />
                        </div>

                        <div className="text-right mb-6">
                            <a href="#" className="text-base font-semibold font-Open_Sans text-[#4A5874] hover:underline">
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full text-base font-Open_Sans bg-[#1F4FB6] text-white py-2 rounded-md font-semibold hover:bg-[#1a3d8f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <LoaderCircle className="animate-spin text-white mx-auto" size={20} />
                            ) : (
                                <span>Login</span>
                            )}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default LoginForm;