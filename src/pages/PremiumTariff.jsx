
import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";
import {Link, NavLink} from "react-router-dom";

export default function PremiumTariff() {
    const [selected, setSelected] = useState("Oylik");

    const tariffs = [
        { name: "Oylik", price: 100000, benefit: "", perMonth: "", id: "monthly" },
        { name: "3 Oylik", price: 200000, benefit: "33 % foyda", perMonth: "25000 UZS/oy", id: "3month" },
        { name: "6 Oylik", price: 500000, benefit: "33 % foyda", perMonth: "25000 UZS/oy", id: "6month" },
        { name: "Yillik", price: 1000000, benefit: "33 % foyda", perMonth: "25000 UZS/oy", id: "yearly" },
    ];

    return (
        <div className="lightTraiff  flex flex-col items-center">
            {/* Logo */}
            <div className="flex w-full   items-center  mt-6  mb-[40px]">
                <div className={"flex  justify-start"}><NavLink to="/"> <i className="fa-solid fa-arrow-left"></i>
                </NavLink></div>
                <div className={"flex w-full justify-center"}><p
                    className={" text-center  font-medium text-[16px]"}>Premium tarif</p></div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-md">
                {tariffs.map((tariff) => (
                    <label
                        key={tariff.id}
                        className={`p-4 border rounded-lg cursor-pointer flex flex-col gap-2 transition ${
                            selected === tariff.name ? "border-yellow-500 bg-yellow-100" : "border-gray-300"
                        }`}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-[16px] font-medium">{tariff.name}</h3>
                            <input
                                type="radio"
                                name="tariff"
                                value={tariff.name}
                                checked={selected === tariff.name}
                                onChange={() => setSelected(tariff.name)}
                                className="hidden"
                            />
                            <div
                                className={`w-9 h-5 flex items-center rounded-full  ${
                                    selected === tariff.name ? "bg-green-500" : "bg-gray-300"
                                }`}
                            >
                                <div
                                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                                        selected === tariff.name ? "translate-x-5" : ""
                                    }`}
                                />
                            </div>
                        </div>
                        <p className="text-[14px] my-[10px]">{tariff.price.toLocaleString()} </p>
                        {tariff.benefit && <p className="text-white bg-yellow-500   py-1 rounded-lg text-[12px] w-2/3 px-2">{tariff.benefit}</p>}
                        {tariff.perMonth && <p className="text-gray-500 mt-[46px] text-[12px]">({tariff.perMonth})</p>}
                    </label>
                ))}
            </div>

            {/* Payment Button */}
            <div>
                <Link to="/success-payment">

                payment sucess
                </Link>
            </div>
            <button
                className="mt-16 mb-4 px-6 py-3 bg-yellow-500 text-white rounded-lg text-lg font-semibold disabled:opacity-50 w-full max-w-md cursor-pointer"
                disabled={!selected}
            >
                To‘lovni amalga oshirish
            </button>
        </div>
    );
}
