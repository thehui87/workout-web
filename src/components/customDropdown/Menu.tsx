import React, { useState, useRef, useEffect } from 'react';
import { IoIosColorPalette } from 'react-icons/io';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
interface MenuProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    as?: React.ElementType; // Change this to React.ElementType for better flexibility
}

export const Menu: React.FC<MenuProps> = ({
    children,
    as: Component = 'div',
    ...props
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const { colorPickerSelection } = useSelector(
        (state: RootState) => state.toolbar
    );
    const toggleMenu = () => setIsOpen((prev) => !prev);

    // Close dropdown when clicking outside
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
        <Component className="relative inline-block text-left" {...props}>
            <div>
                <MenuButton
                    toggleMenu={toggleMenu}
                    colorName={colorPickerSelection}
                />
            </div>
            {isOpen && (
                <div
                    className="absolute right-0 left-auto md:left-0 mx-auto bottom-10 z-10 mt-2 origin-bottom-left  rounded-md shadow-lg w-80"
                    ref={dropdownRef}
                >
                    <div className="py-1" role="menu">
                        {children}
                    </div>
                </div>
            )}
        </Component>
    );
};

const MenuButton: React.FC<{ toggleMenu: () => void; colorName: string }> = ({
    toggleMenu,
    colorName,
}) => (
    <button
        onClick={toggleMenu}
        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white tertiary-color rounded-md focus:outline-none "
    >
        <IoIosColorPalette />
        <p className="ml-2">{colorName}</p>
    </button>
);
