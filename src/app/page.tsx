import Image from "next/image";
import Hero from "@/components/Hero"
import Jobs from "./jobs/page";
import Apply from "./apply/page";
export default function Home() {
  return (
 <div>
  
  <Hero/>
  <Jobs/>
  <Apply/>

 </div>
  );
}
