import React from "react";
import {NavLink} from "react-router-dom";


export default function Tariffs() {
    return (
        <div className="Tariffs  mt-5">
            <div className="flex flex-col justify-center items-center">

                <p className={" mt-6 text-[16px] font-medium mb-6"}>To’lov tariflari</p>
            </div>

            <div className="p-8  text-start bg-[#FFFDF7]">
                <p className={"text-[#FBB621] text-[20px] font-semibold"}>Light</p>
                <p className={"text-[#7E858B]"}>Perfect for testing out features with no commitment.</p>

                <div className="mt-4 flex space-x-2 items-center">
                    <p className={"text-[24px] font-bold"}> 50 ming </p><p>/</p> <strike className={"text-red-400"}>77
                    ming</strike>
                </div>

                <NavLink to="/light"
                    className={"mt-2 py-4 w-full bg-[#FBB621] text-white rounded-sm flex items-center gap-3 justify-center"}>
                    <p> Tarifni tanlang</p> <i className="fa-solid fa-arrow-right mt-1"></i>
                </NavLink>

                <div>
                    <h4 className={"mt-4 font-semibold"}>Features</h4>
                    <div className={"flex items-center  gap-2 mt-2"}><i
                        className="fa-solid fa-check text-[#FBB621] "></i> <p>Increased Usage Limits</p></div>
                    <div className={"flex items-center  gap-2 mt-2"}><i
                        className="fa-solid fa-check text-[#FBB621] "></i> <p>Priority Support</p></div>
                    <div className={"flex items-center  gap-2 mt-2"}><i
                        className="fa-solid fa-check text-[#FBB621] "></i> <p>Multi-User Support</p></div>
                    <div className={"flex items-center  gap-2 mt-2"}><i
                        className="fa-solid fa-check text-[#FBB621] "></i> <p>Increased Storage</p></div>
                </div>
            </div>
            <div className="p-8  text-start bg-[#FFFDF7]">
                <p className={"text-[#FBB621] text-[20px] font-semibold"}>Medium</p>
                <p className={"text-[#7E858B]"}>Perfect for testing out features with no commitment.</p>

                <div className="mt-4 flex space-x-2 items-center">
                    <p className={"text-[24px] font-bold"}> 50 ming </p><p>/</p> <strike className={"text-red-400"}>77
                    ming</strike>
                </div>

                <NavLink to="/medium"
                    className={"mt-2 py-4 w-full bg-[#FBB621] text-white rounded-sm flex items-center gap-3 justify-center"}>
                    <p> Tarifni tanlang</p> <i className="fa-solid fa-arrow-right mt-1"></i>
                </NavLink>

                <div>
                    <h4 className={"mt-4 font-semibold"}>Features</h4>
                    <div className={"flex items-center  gap-2 mt-2"}><i
                        className="fa-solid fa-check text-[#FBB621] "></i> <p>Increased Usage Limits</p></div>
                    <div className={"flex items-center  gap-2 mt-2"}><i
                        className="fa-solid fa-check text-[#FBB621] "></i> <p>Priority Support</p></div>
                    <div className={"flex items-center  gap-2 mt-2"}><i
                        className="fa-solid fa-check text-[#FBB621] "></i> <p>Multi-User Support</p></div>
                    <div className={"flex items-center  gap-2 mt-2"}><i
                        className="fa-solid fa-check text-[#FBB621] "></i> <p>Increased Storage</p></div>
                </div>
            </div>
            <div className="p-8  text-start bg-[#FFFDF7]">
                <p className={"text-[#FBB621] text-[20px] font-semibold"}>Premium</p>
                <p className={"text-[#7E858B]"}>Perfect for testing out features with no commitment.</p>

                <div className="mt-4 flex space-x-2 items-center">
                    <p className={"text-[24px] font-bold"}> 50 ming </p><p>/</p> <strike className={"text-red-400"}>77
                    ming</strike>
                </div>

                <NavLink to="/premium"
                    className={"mt-2 py-4 w-full bg-[#FBB621] text-white rounded-sm flex items-center gap-3 justify-center"}>
                    <p> Tarifni tanlang</p> <i className="fa-solid fa-arrow-right mt-1"></i>
                </NavLink>

                <div>
                    <h4 className={"mt-4 font-semibold"}>Features</h4>
                    <div className={"flex items-center  gap-2 mt-2"}><i
                        className="fa-solid fa-check text-[#FBB621] "></i> <p>Increased Usage Limits</p></div>
                    <div className={"flex items-center  gap-2 mt-2"}><i
                        className="fa-solid fa-check text-[#FBB621] "></i> <p>Priority Support</p></div>
                    <div className={"flex items-center  gap-2 mt-2"}><i
                        className="fa-solid fa-check text-[#FBB621] "></i> <p>Multi-User Support</p></div>
                    <div className={"flex items-center  gap-2 mt-2"}><i
                        className="fa-solid fa-check text-[#FBB621] "></i> <p>Increased Storage</p></div>
                </div>
            </div>
        </div>
    );
}
