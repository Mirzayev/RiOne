import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

export default function Detail() {
    const { id } = useParams();
    // const  { name }  = useParams()
    const [tariff, setTariff] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQwOTc4OTE4LCJpYXQiOjE3NDAzNzQxMTgsImp0aSI6ImZmN2U4ZWYwODNkZDQxOTlhYmJlMTVjZDNhODA4MWIxIiwidXNlcl9pZCI6IjVmNWVhNjZmLTAzYTMtNGUwZi04YmQxLWMwZDUwMjZkOTBjMSIsInV1aWQiOiI1ZjVlYTY2Zi0wM2EzLTRlMGYtOGJkMS1jMGQ1MDI2ZDkwYzEifQ.RWwrc45z_GMJLcGHDsWGPMpAK89SMZ58zFB8d6kY21s"
    ;

    useEffect(() => {
        const fetchTariff = async () => {
            try {
                const response = await fetch(`https://dev.api.rione.dynamicsoft.uz/api/v1/plans/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error(`Xatolik: ${response.status} - ${response.statusText}`);
                }

                const data = await response.json().then(res => res.data);
                setTariff(data);
                setLoading(false);

                // Agar tariflar mavjud bo‘lsa, birinchisini tanlab qo‘yish
                if (data?.subscriptions?.length > 0) {
                    setSelectedPlan(data.subscriptions[0].id);
                }
            } catch (error) {
                console.error('Tariflarni yuklashda xatolik:', error.message);
                setLoading(false);
            }
        };

        fetchTariff();
    }, [id]);

    const [isLoading, setIsLoading] = useState(false);

    const handlePayment = async () => {
        if (!selectedPlan) return;

        setIsLoading(true);

        try {
            const response = await fetch(`https://dev.api.rione.dynamicsoft.uz/api/v1/payment-link`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ subscription_id: selectedPlan })
            });

            if (!response.ok) {
                throw new Error(`Xatolik: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            if (data?.link) {
                window.location.href = data.link; // To‘lov sahifasiga yo‘naltirish
            } else {
                console.error("To‘lov havolasi mavjud emas:", data);
            }
        } catch (error) {
            console.error("To‘lovni amalga oshirishda xatolik:", error.message);
        } finally {
            setIsLoading(false); // Loading tugaydi
        }
    };
    if (loading) {
        return <p className="text-center mt-5">Yuklanmoqda...</p>;
    }

    if (!tariff) {
        return <p className="text-center mt-5 text-red-500">Xatolik: Tarif topilmadi</p>;
    }

    return (
        <div className="lightTariff flex flex-col items-center p-4">
            {/* Logo va sarlavha */}
            <div className="flex w-full items-center mt-6 mb-6">
                <div className="flex justify-start">
                    <NavLink to="/"> <i className="fa-solid fa-arrow-left"></i> </NavLink>
                </div>
                <div className="flex w-full justify-center">
                    <p className="text-center font-medium text-[16px]">{tariff.name}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {tariff?.subscriptions?.length > 0 ? (
                    tariff.subscriptions.map((sub) => (
                        <div
                            key={sub.id}
                            className={`p-4 rounded-lg border ${selectedPlan === sub.id ? "bg-yellow-50 border-yellow-500" : "border-gray-300"}`}
                            onClick={() => setSelectedPlan(sub.id)}
                        >
                            <div className="flex justify-between items-center">
                                <p className="font-medium">{sub.name}</p>
                                <input
                                    type="radio"
                                    checked={selectedPlan === sub.id}
                                    onChange={() => setSelectedPlan(sub.id)}
                                    className="hidden"
                                />
                                <div
                                    className={`w-12 h-6 flex items-center bg-gray-300 rounded-full transition duration-300 ${
                                        selectedPlan === sub.id ? "bg-green-500" : ""
                                    }`}
                                    onClick={() => setSelectedPlan(sub.id)}
                                >
                                    <div
                                        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition duration-300 ${
                                            selectedPlan === sub.id ? "translate-x-6" : ""
                                        }`}
                                    ></div>
                                </div>
                            </div>
                            {sub.price && (
                                <p className="my-[10px]">{Number(Math.floor(sub.price)).toLocaleString()}</p>
                            )}

                            {sub.profit > 0 && (
                                <span className="bg-yellow-400 text-white px-2 py-1 text-xs rounded-full">
                                    {sub.profit} % foyda
                                </span>
                            )}
                            {sub.description && (
                                <p className="text-gray-500 text-[12px] mt-[46px]">({(sub.description).toLocaleString()} /oy)</p>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center w-full">Tariflar mavjud emas</p>
                )}
            </div>

            {/* To‘lov tugmasi */}
            <div className="flex items-center mt-10 w-full">
                <button
                    className="w-full bg-yellow-500 text-white py-3 rounded-lg text-lg font-semibold flex items-center justify-center"
                    disabled={!selectedPlan || isLoading} // Loading paytida disable bo'ladi
                    onClick={handlePayment}
                >
                    {isLoading ? (
                        <div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        "To‘lovni amalga oshirish"
                    )}
                </button>
            </div>
        </div>
    );
}
