import React, { useEffect, useState } from 'react';
import { BiSolidPencil } from 'react-icons/bi';
import { IoCloseCircle } from 'react-icons/io5';

// import { ReactComponent as UserIcon } from '../assets/images/icons/Users_ico.svg';
import userIconPath from '../assets/images/icons/Users_ico.svg';
// <UserIcon className="w-25 h-25 mr-5" fill="#345a24" />

const ProfileImage: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCloseClick = () => {
        setIsEditing(false);
    };

    useEffect(() => {
        console.log({ userIconPath });
    }, []);

    return (
        <div className="flex flex-col items-center">
            <div className="relative">
                <img
                    src={image || userIconPath}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
                />

                <button
                    onClick={handleEditClick}
                    className="absolute bottom-0 right-0 ring-2 bg-white rounded-full p-2 hover:bg-teal-600 hover:text-white"
                >
                    <BiSolidPencil />
                </button>
            </div>
            {isEditing && (
                <div className="mt-4">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="mb-2"
                    />
                    <button
                        onClick={handleCloseClick}
                        className="bg-white text-red-600 rounded-full"
                    >
                        <IoCloseCircle size={40} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfileImage;
