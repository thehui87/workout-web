import React from 'react';
const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div
            className="relative top-20 overflow-auto"
            style={{ height: 'calc(100vh - 80px)' }}
        >
            {children}
        </div>
    );
};

export default AppLayout;
