import React from "react";
import Image from "next/image";

export default function Services () {
    return (
        <>

         <div className="block sm:hidden">
            <Image src={"/images/7a.png"} alt="services1" height={500} width={500} 
            className="w-[640px] h-[2135px]"/>
         </div>



        
        <div className="hidden sm:block">
            <Image src={"/images/7b.png"} alt="services2" width={1000} height={1000}
            className="w-[1280px] h-[1742px]"/>
        </div>
        </>
    )
}