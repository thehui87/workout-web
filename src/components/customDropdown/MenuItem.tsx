import React from 'react';

interface MenuItemProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string; // Optional className prop
    anchor?: 'top' | 'bottom' | 'left' | 'right'; // Optional anchor prop
}

export const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    children,
    className = '',
    anchor = 'bottom',
}) => {
    const anchorClass = anchor === 'top' ? 'translate-y-0' : 'translate-y-1';

    return (
        <button
            onClick={onClick}
            className={`block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 transition-transform transform ${anchorClass} ${className}`}
            role="menuitem"
        >
            {children}
        </button>
    );
};
