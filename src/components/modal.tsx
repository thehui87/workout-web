import React from 'react';
import { IoCloseCircle } from 'react-icons/io5';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 "
            // style={{ height: 'calc(100vh-80px)', top: '80px' }}
        >
            <div
                className="relative bg-white rounded-lg w-11/12 md:w-1/2 "
                style={{ maxHeight: 'calc(100% - 4rem)' }}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-2 -right-2 text-gray-600 z-10"
                >
                    <IoCloseCircle size={30} />
                </button>
                <div
                    className="overflow-auto"
                    style={{ maxHeight: 'calc(100vh - 5rem)' }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
