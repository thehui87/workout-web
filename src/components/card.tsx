// Card.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
interface CardProps {
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Specify that icon is a component accepting SVG props
    title: string;
    description?: string;
    path?: string;
}

const Card: React.FC<CardProps> = ({
    title,
    icon: Icon,
    description,
    path = '#',
}) => {
    const navigate = useNavigate();

    const handleNavigateToWorkouts = (path: string) => {
        navigate(path); // Navigate to the workouts page
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <Link
                to={path}
                className="flex items-center justify-between"
                onClick={() => handleNavigateToWorkouts(path)}
            >
                <div className="flex items-center justify-start">
                    {Icon && <Icon className="w-6 h-6 mr-5" />}
                    <div className="flex flex-col">
                        <h2 className="text-lg font-semibold">{title}</h2>
                        <p className="mt-2 text-gray-600">{description}</p>
                    </div>
                </div>
                <h2 className="ml-2 mt-2 text-gray-600">{32}</h2>
            </Link>
        </div>
    );
};

export default Card;
