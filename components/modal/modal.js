import React from "react";
import { useRouter } from "next/navigation";

const Modal = ({ children }) => {
	const router = useRouter();
	return (
		<div className="fixed inset-0 flex items-center justify-center z-50">
			<div
				className="absolute inset-0 bg-gray-800 opacity-75"
				onClick={onClose}
			></div>
			<div className="bg-white p-4 rounded-lg shadow-lg z-10">
				{children}
			</div>
		</div>
	);
};

export default Modal;
