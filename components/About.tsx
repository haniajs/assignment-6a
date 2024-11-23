import React from "react";
import Image from "next/image";

export default function About () {
    return (
        <>

         <div className="block sm:hidden">
            <Image src={"/images/8a.png"} alt="about1" height={500} width={500} 
            className="w-[640px] h-[1075px]"/>
         </div>



        
        <div className="hidden sm:block">
            <Image src={"/images/8b.png"} alt="about2" width={1000} height={1000}
            className="w-[1280px] h-[895px]"/>
        </div>
        </>
    )
}