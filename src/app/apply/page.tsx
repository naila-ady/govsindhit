

import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4, TbCircleNumber5 } from "react-icons/tb";

export default function Apply() {
    return (
        <div className="" >
  <section className="py-6 flex flex-col text-center max-w-full bg-white border-spacing-5 border-gray-200 shadow-xl body-font">
    {/* Section Container */}
    <div className="container px-4 flex items-center py-24 mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#044E83] mb-4 md:w-2/3 mx-auto">
        Before continuing to the application
        <br />
        please subscribe on these social
        <br />
        media platforms.
      </h2>
    </div>

    {/* Social Media Icons and Continue Button */}
    <div className="flex flex-col items-center md:mt-12 mt-6">
      {/* Social Media Icons */}
      <div className="text-5xl mb-6 flex space-x-6">
        <Link href="#" className="text-[#4869b2] hover:text-[#044E83]">
          <FaFacebook />
        </Link>
      </div>
      
      {/* Continue Button */}
      <button className="text-white font-bold text-center h-[56px] w-[208px] bg-[#044E80] border-2 text-3xl focus:outline-none hover:bg-[#044E83] rounded mb-6">
        Continue
      </button>

      {/* Already applied link */}
      <Link href="#" className="text-[#9dc9e9] text-3xl">
        Already applied? Get Admit Card
      </Link>
    </div>
  </section>

  {/* Social Media Progress Indicators */}
  <div className="text-[#044E80] text-3xl flex items-center h-20 justify-center mt-24 space-x-12">
    <h1 className="flex items-center space-x-2">
      <TbCircleNumber1 />
      <span>Facebook ----</span>
    </h1>
    <h1 className="flex items-center space-x-2">
      <TbCircleNumber2 />
      <span>YouTube ----</span>
    </h1>
    <h1 className="flex items-center space-x-2">
      <TbCircleNumber3 />
      <span>Twitter ----</span>
    </h1>
    <h1 className="flex items-center space-x-2">
      <TbCircleNumber4 />
      <span>Instagram ----</span>
    </h1>
    <h1 className="flex items-center space-x-2">
      <TbCircleNumber5 />
      <span>Apply</span>
    </h1>
  </div>
</div>
      
    )
}   