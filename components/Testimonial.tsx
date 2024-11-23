import React from "react";
import Image from "next/image";

export default function Testimonial () {
    return (
        <>

         <div className="block sm:hidden">
            <Image src={"/images/9a.png"} alt="testimonial1" height={500} width={500} 
            className="w-[640px] h-[681.89px]"/>
         </div>



        
        <div className="hidden sm:block">
            <Image src={"/images/9b.png"} alt="testimonial2" width={1000} height={1000}
            className="w-[1280px] h-[830.89px]"/>
        </div>
        </>
    )
}