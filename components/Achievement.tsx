import React from "react";
import Image from "next/image";

export default function Achievement () {
    return (
        <>

         <div className="block sm:hidden">
            <Image src={"/images/6a.png"} alt="achievement1" height={500} width={500} 
            className="w-[640px] h-[451px]"/>
         </div>



        
        <div className="hidden sm:block">
            <Image src={"/images/6b.png"} alt="achievement2" width={1000} height={1000}
            className="w-[1280px] h-[488px]"/>
        </div>

        <div className="hidden sm:block">
            <Image src={"/images/6b.png"} alt="achievement2" width={1000} height={1000}
            className="w-[1280px] h-[488px]"/>
        </div>
        
        </>
    )
}