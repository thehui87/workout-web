import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

interface PlannerLayoutProps {
    backPath?: string | null;
    toolbarItems?: React.ReactNode;
    children: React.ReactNode;
}

const PlannerLayout: React.FC<PlannerLayoutProps> = ({
    backPath = null,
    toolbarItems,
    children,
}) => {
    const navigate = useNavigate();
    const backToPlanner = () => {
        // navigate('/planner');
        // if (window.history?.length && window.history.length > 1) {
        //     navigate(-1);
        // } else {
        //     navigate('/planner', { replace: true });
        // }
        if (backPath) {
            navigate(backPath);
        }
    };
    return (
        <div
            // className="bg-slate-100 bg-opacity-25 relative top-20"
            className="relative top-20 overflow-auto"
            style={{ height: 'calc(100vh - 80px)' }}
        >
            <div className="flex items-center h-9">
                {backPath && (
                    <button
                        onClick={backToPlanner}
                        className=" bg-white rounded-full mx-2 origin-center shadow-lg hover:shadow-2xl hover:w-8 hover:h-8 transition-all duration-300"
                    >
                        <FaAngleLeft size={30} />
                    </button>
                )}
                {toolbarItems}
            </div>
            <div className="m-3 overflow-auto">{children}</div>
        </div>
    );
};

export default PlannerLayout;
