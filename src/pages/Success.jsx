import React from "react";

export default function Success() {
    return (
        <div className="flex justify-center items-center h-screen" role="alert">
            <div className="text-center">
                <div className="py-[14px] px-4 bg-green-500 rounded-full inline-flex items-center justify-center">
                    <i className="fa-solid fa-check text-white text-2xl"></i>
                </div>
                <p className="mt-2 text-gray-800 text-lg font-medium">
                    To'lov muvaffaqiyatli amalga oshirildi. Iltimos, tizimga qaytadan kiring.
                </p>
            </div>
        </div>
    );
}
