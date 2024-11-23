import React from "react";
import Image from "next/image";

export default function Courses () {
    return (
        <>

         <div className="block sm:hidden">
            <Image src={"/images/5a.png"} alt="courses1" height={500} width={500} 
            className="w-[640px] h-[862px]"/>
         </div>



        
        <div className="hidden sm:block">
            <Image src={"/images/5b.png"} alt="courses2" width={1000} height={1000}
            className="w-[1280px] h-[1049px]"/>
        </div>
        </>
    )
}