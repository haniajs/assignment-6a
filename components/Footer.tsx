import React from "react";
import Image from "next/image";

export default function Footer () {
    return (
        <>

         <div className="block sm:hidden">
            <Image src={"/images/10a.png"} alt="footer1" height={500} width={500} 
            className="w-[640px] h-[1411px]"/>
         </div>



        
        <div className="hidden sm:block">
            <Image src={"/images/10b.png"} alt="footer2" width={1000} height={1000}
            className="w-[1280px] h-[684px]"/>
        </div>
        </>
    )
}