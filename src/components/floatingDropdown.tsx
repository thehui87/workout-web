import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    IoHomeSharp,
    IoLogIn,
    IoPersonCircleSharp,
    IoInformationCircle,
} from 'react-icons/io5';
import { useAuth } from '../context/authContext';

const hamburgerMenuStyle =
    'w-6 rounded-lg tertiary-color mb-1 transform transition-transform duration-300 hover:tertiary-color';
const hamburgerMenuStyleHeight = { height: '0.2rem' };

const FloatingDropdown: React.FC = () => {
    const [currentRoute, setCurrentRoute] = useState('/');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // const handleClickOutside = (event: MouseEvent) => {
    //     if (
    //         dropdownRef.current &&
    //         !dropdownRef.current.contains(event.target as Node)
    //     ) {
    //         setIsOpen(false);
    //     }
    // };

    // useEffect(() => {
    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, []);

    const handleLogout = () => {
        toggleMenu();
        const onSuccessCallback = (res: any) => {
            navigate('/login');
        };

        const onErrorCallback = (res: any) => {
            console.error(res);
        };
        logout(onSuccessCallback, onErrorCallback);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            toggleMenu();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block">
            <button
                className="block focus:outline-none"
                onClick={toggleDropdown}
            >
                <div
                    className={`${hamburgerMenuStyle} ${isOpen ? `rotate-45` : ''}`}
                    style={{
                        ...hamburgerMenuStyleHeight,
                        ...(isOpen ? { '--tw-translate-y': '0.45rem' } : ''),
                    }}
                />
                <div
                    className={`${hamburgerMenuStyle} ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                    style={hamburgerMenuStyleHeight}
                />
                <div
                    className={`${hamburgerMenuStyle} ${isOpen ? `-rotate-45 ` : ''}`}
                    style={{
                        ...hamburgerMenuStyleHeight,
                        ...(isOpen ? { '--tw-translate-y': '-0.45rem' } : ''),
                    }}
                />
            </button>
            {isOpen && (
                <div
                    className={`absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg transition-opacity duration-300 ${
                        isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        animation: isOpen
                            ? 'fadeIn 0.3s forwards'
                            : 'fadeOut 0.3s forwards',
                    }}
                    ref={dropdownRef}
                >
                    <ul className="py-1">
                        <li className="flex items-center font-bold px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link
                                to={'/profile'}
                                key={'nav-menu-auth-mobile-profile'}
                                className="w-full block transition hover:bg-white/5 cursor-pointer"
                                onClick={toggleMenu}
                            >
                                <p
                                    className={`font-semibold  flex items-center ${currentRoute === '/profile' ? 'text-active-color' : 'text-color'}`}
                                >
                                    <span className="mr-2 text-xl">
                                        <IoPersonCircleSharp />
                                    </span>
                                    {'Profile'}
                                </p>
                            </Link>
                        </li>
                        <li
                            // className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            key={'nav-menu-auth'}
                            className={`flex items-center font-bold px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                                currentRoute === '/login'
                                    ? 'font-bold text-active-color'
                                    : ''
                            }`}
                        >
                            <span className="mr-2 text-xl">{<IoLogIn />}</span>
                            <button onClick={handleLogout}>{'Logout'}</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FloatingDropdown;
