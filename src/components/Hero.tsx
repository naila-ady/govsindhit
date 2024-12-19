
import Image from "next/image";
import Link from "next/link";
import hero from "../../public/assets/hero-img.png";
import img1 from "../../public/assets/img1.jpg"
import img2 from "../../public/assets/img2.jpg"
import img3 from "../../public/assets/img3.jpg"
import img4 from "../../public/assets/img4.jpg"
import img5 from "../../public/assets/img5.jpg"
import course1 from "../../public/assets/course1.jpg"
import course2 from "../../public/assets/course2.jpg"
import course3 from "../../public/assets/course3.jpg"
import course4 from "../../public/assets/course4.jpg"
import course5 from "../../public/assets/course5.jpg"
import course6 from "../../public/assets/course6.jpg"
import course9 from "../../public/assets/course9.jpg"
import course10 from "../../public/assets/course10.jpg"
import course11 from "../../public/assets/course11.jpg";



export default function Home() {
  return (
    <div className="h-[4250px] w-[1400px] ">
    <div className="flex flex-row items-center mx-auto justify-between bg-[#FFFFFF]">
    
      <div className="h-auto w-1/2 pt-8">
        <h1 className="text-6xl font-extrabold font-sans tracking-wider whitespace-nowrap
         text-[64px] text-[#044E83] ml-16 mt-28 ">Governer Sindh</h1>
        <h1 className="text-[50px] font-normal text-[#044E83] tracking-wider whitespace-nowrap ml-16 mt-2">Kamran Khan Tessori</h1>
        <h1 className="text-[#2EB6E8] ml-16 tracking-wider whitespace-nowrap font-semibold mt-5 text-4xl text-[50px] leading-tight ">Certified Cloud <br/>
          Applied Generative AI <br/> Engineer (GenEng)</h1>   
          <p className="font-extrabold text-[36px] text-[#044E83] tracking-wide whitespace-nowrap ml-16 mt-2 ">Earn up to $5,000 / month</p>
           <p className="font-extrabold text-[36px] text-[#044E83] tracking-wide whitespace-nowrap ml-16 mt-2 ">Now admissions are open in <br/> Hyderabad</p>
           
           {/* button section */}
           <div className="flex flex-row mb-7 mt-5 gap-10 justify-center ">
           <a href="/apply">
           <button className="bg-[#044E83] text-[#FAF9F6] ml-20 mt-20  text-center w-[260px] h-[76px] rounded-md tracking-wide font-extrabold text-[20px]
           hover:translate-y-1 transition-all">APPLY NOW</button>
           </a>
           <div className="mt-4 ml-2 flex w-full flex-col justify-center">
           <div className="font-extrabold text-4xl tracking-widest ml-11 text-[#044E83] mt-16 text-[36px]">562,143</div>
          <div className="text-2xl tracking-wider text-center font-normal  text-[#044E83] text-[24px] mr-36 ml-10">  Accepted Applications</div>
      </div>
      </div>
      </div>
      

      <div className="w-[900px] h-[600px]">
      <Image src={hero} alt="hero-image" width={600} height={600}></Image>
      </div>
    </div>
     {/* detail section */}

   
       <div className=" ml-16 py-20 m-auto">
        <h1 className="text-[#044E83] text-center tracking-tight font-extrabold text-[36px]">Certified Cloud Applied Generative AI Engineer (GenEng)
        and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
         <p className="ml-8 mt-12 text-[#27272A] text-[24px] font-normal tracking-widest">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs.
           These solopreneurs will adopt the ultra-lean business model and
           work independently and will not need to hire employees or other team members.</p>
           </div>
           {/* img-section */}
           <div className="grid grid-cols-3 gap-12 ml-10 mr-10">
            <div className="shadow-black rounded-lg  shadow-2xl object-cover overflow-hidden ">
              <Image src={img1} alt="intro-img" width={1068} height={968}></Image></div>
              
              <div className="shadow-black rounded-3xl shadow-2xl object-cover overflow-hidden"><Image src={img2} alt="intro-img" width={470} height={300}></Image></div>
              <div className="shadow-black rounded-3xl shadow-2xl object-cover overflow-hidden"><Image src={img3} alt="intro-img" width={470} height={300}></Image></div>

            </div>
            {/* coursl */}
            <div className="relative overflow-hidden w-full h-[300px] mt-20">
            <div className="flex transition-transform duration-300 gap-4" id="slider">
            <div className="shadow-black rounded-lg w-full h-full shadow-2xl overflow-hidden object-cover">
              <Image src={img4} alt="1st slider" width={887} height={400}></Image>
              </div>
              <div className="shadow-black rounded-lg w-full h-full shadow-2xl overflow-hidden object-cover">
              <Image src={img5} alt="1st slider" width={887} height={400}></Image>
              </div>

         
 </div>

            </div>

            {/* Core courses */}
            <div className="text-[24px]  lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main
            text-[#044E83] font-extrabold mt-10 ml-20 ">
                <h1>Core Courses Sequence</h1></div>

            <div className="flex ml-16 gap-12">
            <Link className="hover:scale-105 duration-200 transition-all" href="/compulsory/1">
              <div className="ml-20px rounded-lg overflow-hidden mt-14 bg-transparent border border-gray-200 shadow-lg">
                <Image src={course1} alt="course1-img" width={320} height={189}></Image>
                <div className="text-[#79798B] text-[22px] h-[100px] w-[320px] text-center font-bold pt-7 ">Programming Fundamentals</div>
              </div>
              </Link>
              <Link className="hover:scale-105 duration-200 transition-all" href="/compulsory/2">
              <div className="ml-20px rounded-lg overflow-hidden mt-14 bg-transparent border border-gray-200 shadow-lg">
                <Image src={course2} alt="course1-img" width={320} height={189}></Image>
                <div className="text-[#79798B] text-[22px] h-[100px] w-[320px] text-center font-bold pt-7 ">Web2 Using NextJS</div>
              </div>
              </Link>
              <Link className="hover:scale-105 duration-200 transition-all" href="/compulsory/3">
              <div className="ml-20px rounded-lg overflow-hidden mt-14 bg-transparent border border-gray-200 shadow-lg">
                <Image src={course3} alt="course1-img" width={320} height={189}></Image>
                <div className="text-[#79798B] text-[22px] h-[100px] w-[320px] text-center font-bold pt-7 ">Earn as You Learn</div>
                </div>
              </Link>
              </div>

              {/* Advance courses */}
            <div className="text-center text-6xl  lg:text-4xl  sm:text-4xl sm:text-left text-[#044E83] font-extrabold mt-28 ml-20 ">
                <h1>Advanced Courses</h1></div>

            <div className="flex ml-16 flex-wrap  gap-12">
            <Link className="hover:scale-105 duration-200 transition-all" href="/compulsory/4">
              <div className=" rounded-lg overflow-hidden mt-14 bg-transparent border border-gray-200 shadow-lg">
                <Image src={course4} alt="course1-img" width={320} height={189}></Image>
                <div className="text-[#79798B] text-[22px] h-[100px] w-[320px] text-center font-bold pt-7 ">Aritficial Intelligence</div>
              </div>
              </Link>
              <Link className="hover:scale-105 duration-200 transition-all" href="/compulsory/5">
              <div className="rounded-lg overflow-hidden mt-14 bg-transparent border border-gray-200 shadow-lg">
                <Image src={course5} alt="course1-img" width={320} height={189}></Image>
                <div className="text-[#79798B] text-[22px] h-[100px] w-[320px]  font-bold text-center pt-7 ">Web 3 and Metaverse</div>
              </div>
              </Link>
              <Link className="hover:scale-105 duration-200 transition-all " href="/compulsory/6">
              <div className=" rounded-lg overflow-hidden mt-14 bg-transparent border border-gray-200 shadow-lg">
                <Image src={course6} alt="course1-img" width={320} height={189}></Image>
                <div className="text-[#79798B] text-[22px] h-[100px] w-[320px] text-center font-bold pt-7 ">Cloud_Native Computing</div>
                </div>
              </Link>
              <Link className="hover:scale-105 duration-200 transition-all" href="/compulsory/7">
              <div className="rounded-lg overflow-hidden mt-14 bg-transparent border border-gray-200 shadow-lg">
                <Image src={course9} alt="course1-img" width={320} height={189}></Image>
                <div className="text-[#79798B] text-[22px] h-[100px] w-[320px] text-center font-bold pt-5 ">Ambient Computing and IoT</div>
              </div>
              </Link>
              <Link className="hover:scale-105 duration-200 transition-all" href="/compulsory/8">
              <div className="rounded-lg overflow-hidden mt-14 bg-transparent border border-gray-200 shadow-lg">
                <Image src={course10} alt="course1-img" width={320} height={189}></Image>
                <div className="text-[#79798B] text-[22px] h-[100px] w-[320px] text-center font-bold pt-5 ">Genomaics and Bioinformatics</div>
                </div>
              </Link>
              <Link className="hover:scale-105 duration-200 transition-all" href="/compulsory/9">
              <div className="rounded-lg overflow-hidden  mt-14 bg-transparent border border-gray-200 shadow-lg">
                <Image src={course11} alt="course1-img" width={320} height={189}></Image>
                <div className="text-[#79798B] text-[22px] h-[100px] w-[320px] font-bold text-center pt-5 ">Network Programmability and Automation</div>
                </div>
              </Link>
              
              </div>
              </div>
     
    
      );
}

