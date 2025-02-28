import React from "react";
import visa from '../assets/images/visa.png'
import mastercard from '../assets/images/Mastercard.jpg'
import humo from '../assets/images/humo.png'
import uzcard from '../assets/images/uzcard.jpg'


export default function Footer() {


    return(
        <div className={"flex  bg-white py-3 justify-center space-x-4"}>
            <img className={" h-auto object-contain w-16"} src={humo} alt=""/>
            <img className={" h-auto object-contain w-16"} src={visa} alt=""/>
            <img className={" h-auto object-contain w-16"} src={uzcard} alt=""/>
            <img className={" h-auto object-contain w-16"} src={mastercard} alt=""/>
        </div>
    )
}