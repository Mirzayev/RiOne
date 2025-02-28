import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
    import { useSearchParams } from "react-router-dom";
import Footer from "../components/Footer.jsx";

export default function Tariffs() {
    const [tariffs, setTariffs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const [token,setToken] = useState(null);

    useEffect(() => {
        if(!token){
            setToken(searchParams.get("token"))
            localStorage.setItem('token',searchParams.get("token"));
            fetch("https://dev.api.rione.dynamicsoft.uz/api/v1/plans", {
                headers: {
                    "Authorization": `Bearer ${searchParams.get("token")}`,
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log("API Response:", data);
                    if (Array.isArray(data.data)) {
                        setTariffs(data.data);
                    } else {
                        console.error("Unexpected data format:", data);
                    }
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching tariffs:", error);
                    setLoading(false);
                })
        }
    // console.log(searchParams.get('token'),"token")

    }, []);

    if (loading) {
        return <p className="text-center mt-5">Yuklanmoqda...</p>;
    }

    if (!Array.isArray(tariffs)) {
        return <p className="text-center mt-5 text-red-500">Xatolik: Tariffs ma'lumotlari noto‘g‘ri formatda</p>;
    }

    return (
        <div className="Tariffs mt-5">
            <div className="flex flex-col justify-center items-center">
                <p className="mt-6 text-[16px] font-medium mb-6">To’lov tariflari</p>
            </div>

            {tariffs.map((tariff, index) => (
                <React.Fragment key={tariff.id}>
                    <div className="p-8 text-start bg-[#FFFDF7] mb-4">
                        <p className="text-[#FBB621] text-[20px] font-semibold">{tariff.name}</p>
                        <p className="text-[#7E858B]">{tariff.description}</p>

                        <div className="mt-4 flex space-x-2 items-center">
                            <p className="text-[24px] font-bold">{Number(tariff.price).toLocaleString()} ming</p>
                            {tariff.old_price && (
                                <>
                                    <p>/</p>
                                    <strike
                                        className="text-red-400">{Number(tariff.old_price).toLocaleString()} ming</strike>
                                </>
                            )}
                        </div>

                        <NavLink to={`plans/${tariff.id}`}
                                 className="mt-2 py-4 w-full bg-[#FBB621] text-white rounded-sm flex items-center gap-3 justify-center">
                            <p>Tarifni tanlang</p> <i className="fa-solid fa-arrow-right mt-1"></i>
                        </NavLink>

                        <div>
                            <h4 className="mt-4 font-semibold">Features</h4>
                            {Array.isArray(tariff.features) && tariff.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 mt-2">
                                    <i className="fa-solid fa-check text-[#FBB621]"></i>
                                    <p>{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Har 3 ta tarifdan keyin bo'sh joy qo'shish */}
                    {(index + 1) % 1 === 0 && <div className="mb-6"></div>}
                </React.Fragment>
            ))}
            {!loading && <Footer/>}
        </div>
    );
}
