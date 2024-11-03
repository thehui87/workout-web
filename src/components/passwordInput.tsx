import React, { forwardRef, useState, useImperativeHandle } from 'react';
import { IoEye } from 'react-icons/io5';
import { IoEyeOff } from 'react-icons/io5';

interface PasswordInputProps {
    title?: string;
}
export interface PasswordInputHandle {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const PasswordInput = forwardRef<PasswordInputHandle, PasswordInputProps>(
    ({ title = 'Password' }, ref) => {
        const [isPasswordVisible, setIsPasswordVisible] = useState(false);
        const [password, setPassword] = useState('');

        const togglePasswordVisibility = () => {
            setIsPasswordVisible(!isPasswordVisible);
        };

        // Expose the password and setPassword function to parent components
        useImperativeHandle(ref, () => ({
            password,
            setPassword,
        }));

        return (
            <div className="">
                <label
                    htmlFor="password"
                    className="block text-active-color mb-2"
                >
                    {title}
                </label>
                <div className="relative">
                    <input
                        type={isPasswordVisible ? 'text' : 'password'}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                        required
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="cursor-pointer absolute text-2xl right-2 top-2 text-color focus:outline-none"
                    >
                        {isPasswordVisible ? <IoEyeOff /> : <IoEye />}
                    </button>
                </div>
            </div>
        );
    }
);

export default PasswordInput;
