
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
    <div className="max-w-[1920px] mx-auto py-28">
    <div className="flex flex-col sm:flex-row mx-auto flex-wrap bg-[#FFFFFF] py-2 ">
    
      <div className="max-w-[600px] px-6 items-center mx-auto sm:space-y-4 gap-2">
        <h1 className=" max-w-[500px] md:text-6xl text-4xl font-extrabold tracking-wider text-[#044E83] py-2">Governer Sindh</h1>
        <h1 className=" max-w-[500px] md:text-[50px] text-3xl font-normal text-[#044E83] tracking-wider whitespace-nowrap py-2 ">
            Kamran Khan Tessori</h1>
        <h1 className=" max-w-[500px] text-2xl text-[#2EB6E8] tracking-wider whitespace-nowrap font-semibold
         sm:text-5xl
         leading-tight py-2">
            Certified Cloud <br/>Applied Generative AI <br/> Engineer (GenEng)</h1>   
          <p className=" max-w-[500px] font-extrabold sm:text-[36px] text-xl text-[#044E83] tracking-wide whitespace-nowrap py-2">
            Earn up to $5,000 / month</p>
           <p className=" max-w-[500px] font-extrabold sm:text-[36px] text-xl text-[#044E83] tracking-wide whitespace-nowrap py-2 ">
            Now admissions are open in <br/> Hyderabad</p>
           
           {/* button section */}
           <div className="flex sm:flex-row flex-col py-2 gap-10 justify-center mx-auto ">
           <Link href="/apply">
           <button className="bg-[#044E83] text-[#FAF9F6]   text-center w-[260px] h-[76px] rounded-md tracking-wide font-extrabold text-[20px]
           hover:translate-y-1 transition-all">APPLY NOW</button>
           </Link>
           <div className="py-2 flex max-w-[500px] flex-col justify-center">
           <h1 className="font-extrabold text-4xl tracking-widest  text-[#044E83]">562,143</h1>
          <p className="text-2xl tracking-wider font-normal  text-[#044E83] "> 
             Accepted Applications</p>
      </div>
      </div>
      </div>
      

      <div className="max-w-[600px]">
      <Image src={hero} alt="hero-image" width={600} height={0}></Image>
      </div>
    </div>
     {/* detail section */}

   
       <div className=" max-w-[1920px] py-4 mx-auto">
        <h1 className="text-[#044E83] text-center tracking-tight font-extrabold text-[36px]">Certified Cloud Applied Generative AI Engineer (GenEng)
        and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
         <p className=" text-[#27272A] text-[24px] flex mx-auto font-normal py-4 text-justify px-4">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs.
           These solopreneurs will adopt the ultra-lean business model and
           work independently and will not need to hire employees or other team members.</p>
           </div>



           {/* ist img-section */}
           <div className="grid sm:grid-cols-3 grid-cols-1 gap-2">
            <div className="shadow-black rounded-lg  shadow-2xl object-cover overflow-hidden ">
              <Image src={img1} alt="intro-img" width={1068} height={968}/>
              </div>
                <div className="shadow-black rounded-lg shadow-2xl object-cover overflow-hidden">
                <Image src={img2} alt="intro-img" width={1068} height={968}/>
                </div>
              <div className="shadow-black rounded-lg shadow-2xl object-cover overflow-hidden">
                <Image src={img3} alt="intro-img" width={1068} height={968}/>
                </div>
            </div>


            {/* coursl */}
            <div className="overflow-hidden max-w-[1920px] py-8">
            <div className="flex transition-transform duration-300 gap-8">
            <div className="shadow-black rounded-lg  shadow-2xl overflow-hidden object-cover">
              <Image src={img4} alt="1st slider" width={887} height={400}></Image>
              </div>
              <div className="shadow-black rounded-lg  shadow-2xl overflow-hidden object-cover">
              <Image src={img5} alt="1st slider" width={887} height={400}></Image>
              </div>

         
 </div>

            </div>

            {/* Core courses */}
            <div className="text-[24px] lg:text-4xl sm:text-4xl text-2xl   
            text-[#044E83] font-extrabold py-4  ">
                <h1>Core Courses Sequence</h1>
                </div>

            <div className="flex sm:flex-row flex-col gap-2 py-6">
              <div className=" rounded-lg overflow-hidden py-10 bg-transparent border border-gray-200 shadow-lg">
            <Link className="hover:scale-105 duration-200 transition-all" href="/compulsory/1">
                <Image src={course1} alt="course1-img" width={320} height={189}/>
                <div className="text-[#79798B] text-[22px] text-center font-bold py-2 ">
                  Programming Fundamentals
                  </div>
              </Link>
              </div> 
              <Link className="hover:scale-105 duration-200 transition-all" href="/compulsory/2">
              <div className=" rounded-lg overflow-hidden py-10 bg-transparent border border-gray-200 shadow-lg">
                <Image src={course2} alt="course1-img" width={320} height={189}/>
                <div className="text-[#79798B] text-[22px] text-center font-bold py-2  ">Web2 Using NextJS

                </div>
              </div>
              </Link>
              <Link className="hover:scale-105 duration-200 transition-all" href="/compulsory/3">
              <div className=" rounded-lg overflow-hidden py-10  bg-transparent border border-gray-200 shadow-lg">
                <Image src={course3} alt="course1-img" width={320} height={189}/>
                <div className="text-[#79798B] text-[22px]  text-center font-bold py-2 ">Earn as You Learn</div>
                </div>
              </Link>
              </div>

              {/* Advance courses */}
            <div className="text-center text-6xl lg:text-4xl sm:text-4xl sm:text-left text-[#044E83]
             font-extrabold py-4  ">
                <h1>Advanced Courses</h1>
                </div>

            <div className="flex flex-wrap gap-8 justify-start">
            <Link className="hover:scale-105 duration-200 transition-all" href="/compulsory/4">
              <div className=" rounded-lg overflow-hidden py-10 bg-transparent border border-gray-200 shadow-lg">
                <Image src={course4} alt="course1-img" width={320} height={189}></Image>
                <div className="text-[#79798B] text-[22px] text-center font-bold py-3 ">Aritficial Intelligence</div>
              </div>
              </Link>
              <Link className="hover:scale-105 duration-200 transition-all" href="/compulsory/5">
              <div className="rounded-lg overflow-hidden py-10 bg-transparent border border-gray-200 shadow-lg">
                <Image src={course5} alt="course1-img" width={320} height={189}></Image>
                <div className="text-[#79798B] text-[22px] font-bold text-center py-3 ">Web 3 and Metaverse</div>
              </div>
              </Link>
              <Link className="hover:scale-105 duration-200 transition-all " href="/compulsory/6">
              <div className=" rounded-lg overflow-hidden py-10 bg-transparent border border-gray-200 shadow-lg">
                <Image src={course6} alt="course1-img" width={320} height={189}></Image>
                <div className="text-[#79798B] text-[22px] text-center font-bold py-3 ">Cloud_Native Computing</div>
                </div>
              </Link>
              <Link className="hover:scale-105 duration-200 transition-all" href="/compulsory/7">
              <div className="rounded-lg overflow-hidden py-10 bg-transparent border border-gray-200 shadow-lg">
                <Image src={course9} alt="course1-img" width={320} height={189}></Image>
                <div className="text-[#79798B] text-[22px] text-center font-bold py-3 ">Ambient Computing and IoT</div>
              </div>
              </Link>
              <Link className="hover:scale-105 duration-200 transition-all" href="/compulsory/8">
              <div className="rounded-lg overflow-hidden py-10 bg-transparent border border-gray-200 shadow-lg">
                <Image src={course10} alt="course1-img" width={320} height={189}></Image>
                <div className="text-[#79798B] text-[22px] text-center font-bold py-3 ">Genomaics and Bioinformatics</div>
                </div>
              </Link>
              <Link className="hover:scale-105 duration-200 transition-all" href="/compulsory/9">
              <div className="rounded-lg overflow-hidden py-10 bg-transparent border border-gray-200 shadow-lg">
                <Image src={course11} alt="course1-img" width={320} height={189}></Image>
                <div className="text-[#79798B] text-[22px] font-bold text-center py-3 ">Network Programmability <br/>and Automation</div>
                </div>
              </Link>
              
              </div>
              </div>
     
    
      );
}

