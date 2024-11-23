import React from "react";
import Image from "next/image";

export default function Hero () {
    return (
        <>

         <div className="block sm:hidden">
            <Image src={"/images/hero1.png"} alt="hero" height={500} width={500} 
            className="w-[640px] h-[780px]"/>
         </div>



        
        <div className="hidden sm:block">
            <Image src={"/images/hero2.png"} alt="hero2" width={1000} height={1000}
            className="w-[1280px] h-[800px]"/>
        </div>
        </>
    )
}