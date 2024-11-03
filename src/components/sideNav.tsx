import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as HomeIcon } from '../assets/images/icons/Home_ico.svg';
import { ReactComponent as PlannerIcon } from '../assets/images/icons/Planner_ico.svg';
import { ReactComponent as FeedIcon } from '../assets/images/icons/Feed_ico.svg';
import { ReactComponent as CalendarIcon } from '../assets/images/icons/Calendar_ico.svg';
import { ReactComponent as MoreIcon } from '../assets/images/icons/More_ico.svg';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { useLocation } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useThemeContext } from '../context/themeContext';
import { setSideNavExpand } from '../redux/toolbar/toolbar.slice';
import { RootState } from '../redux/store';
import { Link, useNavigate } from 'react-router-dom';
import {
    IoHomeSharp,
    IoLogIn,
    IoPersonCircleSharp,
    IoInformationCircle,
} from 'react-icons/io5';
import { useAuth } from '../context/authContext';

const SideNav = () => {
    // const { sideNavExpand, setSideNavExpand } = useThemeContext();
    const location = useLocation();
    const dispatch = useDispatch();
    const { sideNavExpand } = useSelector((state: RootState) => state.toolbar);
    const [showChildren, setShowChildren] = useState(false);
    const { logout } = useAuth();
    const { userLoggedIn } = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();

    const toggleNav = () => {
        dispatch(setSideNavExpand(!sideNavExpand));
    };

    const sideNavList = [
        {
            name: 'Dashboard',
            path: '/dashboard',
            icon: HomeIcon,
        },
        {
            name: 'Planner',
            path: '/planner',
            icon: PlannerIcon,
        },
        {
            name: 'Feed',
            path: '/feed',
            icon: FeedIcon,
        },
        {
            name: 'Calendar',
            path: '/calendar',
            icon: CalendarIcon,
        },
        {
            name: 'Settings',
            path: '/settings',
            icon: MoreIcon,
        },
    ];

    // useEffect(() => {

    // },[]);
    const isActive = (path: string) => {
        return location.pathname.includes(path) ? 'bg-component-color' : '';
    };
    const isActiveIcon = (path: string) => {
        return location.pathname.includes(path) ? '#8ea700' : '#45707a';
        //rgb(177, 178, 181)
    };

    // const isActivePartial = (path: string) => {
    //     return location.pathname.startsWith(path) ? 'bg-component-color' : ''; // Match if path starts with the given path
    // };

    const handleLogout = () => {
        const onSuccessCallback = (res: any) => {
            navigate('/login');
        };

        const onErrorCallback = (res: any) => {
            console.error(res);
        };
        logout(onSuccessCallback, onErrorCallback);
    };

    const handleUserStatus = () => {
        if (userLoggedIn) {
            handleLogout();
        } else {
            navigate('/login');
        }
        // setIsOpen(false);
    };

    const autoHide = () => {
        if (window.innerWidth < 768) {
            toggleNav();
        }
    };

    useEffect(() => {
        if (sideNavExpand) {
            const timeoutId = setTimeout(() => {
                setShowChildren(true);
            }, 200); // Adjust the delay as needed
            return () => clearTimeout(timeoutId);
        } else {
            setShowChildren(false);
        }
    }, [sideNavExpand]);

    return (
        <div className={`${userLoggedIn ? 'flex' : 'hidden'} h-dvh `}>
            <nav
                // className={`bg-slate-700 text-color h-full p-5 transition-transform duration-300 ${isOpen ? 'w-64' : 'w-20'} md:w-64`} 'w-64' : 'w-0 md:w-14'
                className={`relative top-0 left-0 translate-x-0 h-full flex flex-col bg-color text-color transform ${sideNavExpand ? 'w-64' : 'w-0 md:w-14'} transition-all duration-300 ease-in-out z-50`}
            >
                <div
                    className={`transform ${showChildren ? 'block' : 'hidden md:block'} transition-all duration-300 ease-in-out`}
                >
                    <div className="flex items-center flex-col justify-between py-4">
                        <Logo
                            height={50}
                            fill={'#45707a'}
                            className={`${sideNavExpand ? 'block' : 'hidden md:block'}`}
                        />
                        <h1
                            className={`py-2 px-4 text-2xl font-bold transition-opacity duration-300 h-8 ${sideNavExpand ? 'opacity-100 block' : 'opacity-0 hidden'}`}
                        >
                            Workout planner
                        </h1>
                        <button
                            onClick={toggleNav}
                            className={`absolute ${sideNavExpand ? '-right-2' : '-right-0 md:-right-2'} top-2 bg-white rounded-full p-1 `}
                        >
                            {sideNavExpand ? (
                                <FaAngleLeft size={15} />
                            ) : (
                                <FaAngleRight size={15} />
                            )}
                        </button>
                    </div>

                    <ul className="mt-5">
                        {sideNavList.map((item, index) => {
                            return (
                                <li
                                    key={`side-nav-${index}`}
                                    // ${isActive(item.path)}
                                    className={`transition-opacity duration-300 hover:bg-teal-300 ${isActive(item.path)}`}
                                >
                                    <Link
                                        to={item.path}
                                        className={` ${sideNavExpand ? 'py-2 px-4' : 'py-0 px-0 md:py-2 md:px-4'}  flex items-center h-full`}
                                        onClick={autoHide}
                                    >
                                        <item.icon
                                            width={25}
                                            height={25}
                                            fill={isActiveIcon(item.path)}
                                        />
                                        <span
                                            className={`ml-2 ${sideNavExpand ? 'block' : 'hidden'}`}
                                        >
                                            {item.name}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>

            {/* <main className="flex-1 p-5">
                <h2 className="text-3xl">Welcome to My App!</h2>
                <p className="mt-2">This is your main content area.</p>
            </main> */}
        </div>
    );
};

export default SideNav;
