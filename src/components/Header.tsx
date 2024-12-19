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
    
        <div className="max-w-full h-[107px] flex bg-[#044E83] mx-auto items-center px-8">
    
        <Image src={logo} alt={"logo-image"} width={110} height={218} className="mt-20 px-4"/>
             <div className="max-w-[700px] mx-auto font-bold sm:text-2xl text-sm text-[#B9D8f3]"> 
    
            <h1>Tuition Free Education Program on Latest Technologies</h1>
            </div>
            <div className="max-w-[972px] items-center  hidden md:flex sm:gap-8 ">
            <Link href="/" className="text-lg font-extralight text-[#FAF9F6]">
                        Home
          </Link>
            <Link href="#Apply" className="text-lg font-extralight  text-[#FAF9F6]">
           Apply
            </Link>
             <Link href="#Jobs" className="text-lg  font-extralight  text-[#FAF9F6]">
            Jobs
            </Link> 
            <Link href="#Result" className="text-lg font-extralight text-[#FAF9F6]">
            Result
            </Link>
            <Link href="#Course" className="text-lg font-extralight text-[#FAF9F6]">
            Course
             </Link>
         </div>


  
         <Sheet>
  <SheetTrigger className="sm:hidden text-black">
  <Menu  />
  </SheetTrigger>
  <SheetContent className="">
          <div className="flex flex-col gap-1 list-none ">
            <Link href="/" className="text-lg font-extralight text-[#004e83]">
           Home
                            </Link>
            <Link href="#Apply" className="text-lg font-extralight  text-[#004e83]">
           Apply
            </Link>
             <Link href="#Jobs" className="text-lg  font-extralight  text-[#004e83]">
            Jobs
            </Link> 
            <Link href="#Result" className="text-lg font-extralight text-[#004e83]">
            Result
            
            </Link>
            <Link href="#Course" className="text-lg font-extralight text-[#004e83]">
            Course
             </Link>
         </div> 
   
  </SheetContent>
</Sheet>

         </div> 
        
        
                  
    
    
    )
}