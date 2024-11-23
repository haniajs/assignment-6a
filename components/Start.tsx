import React from "react";
import Image from "next/image";

export default function Start () {
    return (
             <div className=" h-[54px] font-['Roboto'] bg-[#F7F7F7] shadow-inner shadow-[#000000] hidden sm:block">
        <div className="flex">
          <p className="font-['Roboto'] text-sm font-normal leading-[21px] pt-4 pl-12">
            Phone Number: 956 742 455 678   |   Email:info@ddsgnr.com </p>
            <Image src={"/images/icons.jpg"} alt="icons" width={100} height={200} className="flex pt-4 ml-[700px]"/>
        </div>
        <br />
        </div>
    )
}