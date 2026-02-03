import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LoaderCircle, EyeOff, Eye } from 'lucide-react';


const registerValidationSchema = Yup.object().shape({
    registerName: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must be less than 50 characters')
        .required('Full name is required'),
    registerEmail: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    registerPassword: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            'Password must contain at least one uppercase letter, one lowercase letter, and one number'
        )
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('registerPassword'), null], 'Passwords must match')
        .required('Please confirm your password'),
    agreeToTerms: Yup.boolean()
        .oneOf([true], 'You must accept the Terms & Conditions')
});

function RegisterForm({ onRegister, isLoading }) {
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const initialValues = {
        registerName: '',
        registerEmail: '',
        registerPassword: '',
        confirmPassword: '',
        agreeToTerms: false
    };

    const handleSubmit = (values) => {
        onRegister({
            name: values.registerName,
            email: values.registerEmail,
            password: values.registerPassword
        });
    };

    return (
        <div className="animate-fadeIn">
            <h2 className="text-xl font-bold font-Open_Sans mb-6 text-[#08090C] font-Inter">
                Create your Account
            </h2>

            <Formik
                initialValues={initialValues}
                validationSchema={registerValidationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="mb-4">
                            <label className="block text-base font-medium text-[#08090C] leading-6 mb-1">
                                Full Name
                            </label>
                            <Field
                                type="text"
                                name="registerName"
                                disabled={isLoading}
                                placeholder="Enter Your Name"
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.registerName && touched.registerName ? 'border-red-500' : ''
                                }`}
                            />
                            <ErrorMessage 
                                name="registerName" 
                                component="div" 
                                className="text-red-500 text-sm mt-1" 
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-base font-medium text-[#08090C] leading-6 mb-1">
                                Email
                            </label>
                            <Field
                                type="email"
                                name="registerEmail"
                                disabled={isLoading}
                                placeholder="example@mail.com"
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.registerEmail && touched.registerEmail ? 'border-red-500' : ''
                                }`}
                            />
                            <ErrorMessage 
                                name="registerEmail" 
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
                                    type={showRegisterPassword ? "text" : "password"}
                                    name="registerPassword"
                                    placeholder="Create a password"
                                    disabled={isLoading}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                        errors.registerPassword && touched.registerPassword ? 'border-red-500' : ''
                                    }`}
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
                            <ErrorMessage 
                                name="registerPassword" 
                                component="div" 
                                className="text-red-500 text-sm mt-1" 
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-base font-medium text-[#08090C] leading-6 mb-1">
                                Confirm Password
                            </label>
                            <div className='relative'>
                                <Field
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Confirm your password"
                                    disabled={isLoading}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                        errors.confirmPassword && touched.confirmPassword ? 'border-red-500' : ''
                                    }`}
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
                            <ErrorMessage 
                                name="confirmPassword" 
                                component="div" 
                                className="text-red-500 text-sm mt-1" 
                            />
                        </div>

                        <div className="mb-4">
                            <div className="flex items-start gap-2">
                                <Field
                                    type="checkbox"
                                    name="agreeToTerms"
                                    id="terms"
                                    disabled={isLoading}
                                    className={`mt-1 w-4 h-4 rounded border-gray-300 text-[#1F4FB6] focus:ring-2 focus:ring-[#1F4FB6] cursor-pointer ${
                                        errors.agreeToTerms && touched.agreeToTerms ? 'border-red-500' : ''
                                    }`}
                                />
                                <label htmlFor="terms" className="text-sm text-[#4A5874] cursor-pointer">
                                    I agree to the{' '}
                                    <a href="#" className="text-[#1F4FB6] hover:underline font-semibold">
                                        Terms & Conditions
                                    </a>
                                </label>
                            </div>
                            <ErrorMessage 
                                name="agreeToTerms" 
                                component="div" 
                                className="text-red-500 text-sm mt-1" 
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full text-base font-Open_Sans bg-[#1F4FB6] text-white py-2 rounded-md font-semibold hover:bg-[#1a3d8f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <LoaderCircle className="animate-spin text-white mx-auto" size={20} />
                            ) : (
                                <span>Register</span>
                            )}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default RegisterForm;