import Link from "next/link";
import {}from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa"
import { FaYoutubeSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

function Footer(){
    return(
        <div className="bg-[#f3f8f8]  max-w-[1920px] mx-auto py-2 sm:flex  gap-8">
            <div className="max-w-[600px] mx-auto">
            <ul className="py-4">
            <h1 className="text-4xl font-bold text-[28px] text-[#27272a]">Core Courses</h1>

              <li className="font-medium text-[20px] text-[#27272A] py-4 "><Link href="/Programming Fundamentals">Programming Fundamentals</Link></li>
              <li className="font-medium text-[20px] text-[#27272a] py-4"><Link href="/Web2 Using NextJS"></Link>Web2 Using NextJS</li>
               <li className="font-medium text-[20px] text-[#27272a] py-4"><Link href="/Earn as You Learn">Earn as You Learn</Link></li>
            </ul>
            </div>
            {/*Advanced  Courses  */}
            <div className="max-w-[600px]  mx-auto ">
            <ul className="py-4">
 <h1 className="text-4xl font-bold text-[28px] text-[#27272a]">Advanced Courses</h1>
<li className="font-medium text-[20px] text-[#404045] py-"><Link href="/Web 3 and Metaverse">Web 3 and Metaverse</Link></li>
<li className="font-medium text-[20px] text-[#27272A]  py-4"><Link href="/Cloud_Native Computing">Cloud_Native Computing</Link></li>
<li className="font-medium text-[20px] text-[#27272A] py-4"><Link href="/Aritficial Intelligence">Aritficial Intelligence (AI) and Deep Learning</Link></li>
<li className="font-medium text-[20px] text-[#27272A] py-4"><Link href="/Ambient Computing and IOT">Ambient Computing and IOT</Link></li>
<li className="font-medium text-[20px] text-[#27272A] py-4"><Link href="/Genomatics and Bioinformatics">Genomatics and Bioinformatics</Link></li>
<li className="font-medium text-[20px] text-[#27272A] py-4"><Link href="/Network Programmability and Automation">Network Programmability and Automation</Link></li>
            </ul>
            </div>
         {/* social media */}
            <div className="max-w-[600px]  mx-auto ">
                <h1  className="text-4xl font-bold text-[28px] text-[#27272a]  ">Social Links</h1>
                                  <div className="flex flex-row py-4 px-4">               
                   <h1 className="text-[46px] text-[#4267B2]  rounded-full">< FaFacebook /></h1>
                   <h1 className="text-[46px] text-[#FF0000] rounded-full"><FaYoutubeSquare/></h1>
                   <h1 className="text-[46px] text-[#1DA1F2]  rounded-full "><FaTwitterSquare /></h1>
                   <h1 className="text-[46px]  text-[#eda8a8] rounded-full"><FaSquareInstagram /></h1>
                   <h1 className="text-[40px]  bg-[#171515] text-[#ffffff] rounded-full "><FaTiktok/></h1>
                   </div>
                    
            
            </div>
        </div>
    )
}
export default Footer