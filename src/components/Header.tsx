import Image from "next/image"
import logo from "../../public/assets/logo.png";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import {Menu} from "lucide-react"
  
export default function Header(){
    return( 
         <div className="w-screen fixed z-10 mx-auto">
        <div className=" max-w-[1920px] h-[107px] mx-auto flex bg-[#044E83] items-center justify-evenly ">
         <div className="">
        <Image src={logo} alt={"logo-image"} width={110} height={218} className="mt-20"/>
        </div>
             <div className="max-w-[600px] font-bold sm:text-xl text-sm text-[#B9D8f3] text-center"> 
                <h1>Tuition Free Education Program on Latest Technologies</h1>
            </div>
            <div className="max-w-[572px] items-center hidden md:flex sm:gap-8 px-4 ">
            <Link href={"./" }className="text-lg font-extralight text-[#FAF9F6]">
                        Home
          </Link>
            <Link href={"./apply"} className="text-lg font-extralight  text-[#FAF9F6]">
           Apply
            </Link>
             <Link href={"./jobs" }className="text-lg  font-extralight  text-[#FAF9F6]">
            Jobs
            </Link> 
            <Link href={"./result"} className="text-lg font-extralight text-[#FAF9F6]">
            Result
            </Link>
            <Link href={"./course"} className="text-lg font-extralight text-[#FAF9F6]">
            Course
             </Link>
         </div>


  
         <Sheet>
  <SheetTrigger className="sm:hidden text-black">
  <Menu  />
  </SheetTrigger>
  <SheetContent className="">
          <div className="flex flex-col gap-1 list-none ">
            <Link href={"./"} className="text-lg font-extralight text-[#004e83]">
           Home
                            </Link>
            <Link href={"./apply"} className="text-lg font-extralight  text-[#004e83]">
           Apply
            </Link>
            <Link href={"./jobs"} className="text-lg font-extralight  text-[#004e83]">
           Jobs
            </Link>
             
            <Link href={"./result"} className="text-lg font-extralight text-[#004e83]">
            Result
            
            </Link>
            <Link href={"./course"} className="text-lg font-extralight text-[#004e83]">
            Course
             </Link>
         </div> 
   
  </SheetContent>
</Sheet>

         </div> 
         </div>
        
        
                  
    
    
    )
}