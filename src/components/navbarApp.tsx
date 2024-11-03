import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    IoHomeSharp,
    IoLogIn,
    IoPersonCircleSharp,
    IoInformationCircle,
} from 'react-icons/io5';
import { useAuth } from '../context/authContext';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { setSideNavExpand } from '../redux/toolbar/toolbar.slice';
import FloatingDropdown from './floatingDropdown';
import { pathNames } from '../constants/routePaths';
import { HeadingTag } from '../components/headingTag';

const navMenuList = [
    {
        name: 'Home',
        linkTo: '/',
        icon: <IoHomeSharp />,
        // auth: false,
    },
    {
        name: 'About',
        linkTo: '/about',
        icon: <IoInformationCircle />,
        // auth: false,
    },
    // {
    //     name: 'Profile',
    //     linkTo: '/profile',
    //     icon: <IoPersonCircleSharp />,
    //     auth: true,
    // },
    // {
    //     name: 'Login',
    //     linkTo: '/login',
    //     icon: <IoLogIn />,
    // },
];

const hamburgerMenuStyle =
    'w-6 rounded-lg tertiary-color mb-1 transform transition-transform duration-300 hover:tertiary-color';
const hamburgerMenuStyleHeight = { height: '0.2rem' };

const NavbarApp = () => {
    const [currentRoute, setCurrentRoute] = useState('/');
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const { logout } = useAuth();
    const { userLoggedIn } = useSelector((state: RootState) => state.auth);
    const { sideNavExpand } = useSelector((state: RootState) => state.toolbar);
    const [pageTitle, setPageTitle] = useState('');
    const dispatch = useDispatch();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleNav = () => {
        dispatch(setSideNavExpand(!sideNavExpand));
    };

    const navMenuClick = (link: string) => {
        navigate(link);
        setIsOpen(false);
    };

    useEffect(() => {
        let pathItem = pathNames.find((item) => item.path == location.pathname);
        if (pathItem) setPageTitle(pathItem.name);
        else setPageTitle('Workout app');
    }, [location.pathname]);

    return (
        <div className="fixed width-webkit-fill flex justify-between py-5 px-3 bg-component-color text-color border-b-2 border-teal-800 items-center z-40">
            <div className="flex items-center">
                <button
                    onClick={toggleNav}
                    className="block md:hidden bg-white rounded-full p-1 mr-3"
                >
                    {sideNavExpand ? (
                        <FaAngleLeft size={25} />
                    ) : (
                        <FaAngleRight size={25} />
                    )}
                </button>
                <HeadingTag>{pageTitle}</HeadingTag>
            </div>
            <div>
                <FloatingDropdown />

                {/* Optional overlay */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-10"
                        onClick={toggleMenu}
                    ></div>
                )}
            </div>
        </div>
    );
};

export { NavbarApp };
