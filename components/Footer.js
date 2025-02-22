import Link from 'next/link'
import { AiFillSignature } from "react-icons/ai";
import { GrMultiple } from "react-icons/gr";
 //import { FaChartBar } from "react-icons/fa";
//import { MdScreenSearchDesktop } from "react-icons/md";






const Footer = () => {
  return (
    <div className="btm-nav ">
      
  <Link href={"../dashboard"} className="   border-blue-500 focus:border-blue-900 focus:outline-none bg-orange-200 text-orange-900 focus:bg-blue-700 focus:text-slate-100 	 ">
  <AiFillSignature fontSize="1.5em"/>

    <span className="btm-nav-label text-center text-xm"> إضافة تأشيرة</span>
   
  </Link>
 
  <Link href={"../dashboard/allSending"} className="   focus:border-blue-900 focus:outline-none  bg-teal-200 text-teal-900 focus:bg-blue-700 focus:text-slate-100 ">
   

   
  <GrMultiple fontSize="1.5em" />

    <span className="btm-nav-label text-center text-xm"> تعميم</span>


  </Link>

  {/*
  
  
    <Link href={"../"} className="  focus:border-blue-900 focus:outline-none  bg-teal-200 text-teal-900 focus:bg-blue-700 focus:text-slate-100">
  <FaChartBar fontSize="1.5em"/>

    <span className="btm-nav-label text-center text-xm">----</span>
   
  </Link>
  
  <Link href={"../"} className="  focus:border-blue-900 focus:outline-none  bg-rose-200 text-rose-900 focus:bg-blue-700 focus:text-slate-100">
  <MdScreenSearchDesktop  fontSize="1.5em"/>

    <span  className="btm-nav-label text-center text-xm ">--- </span>
   
  </Link>
  */}
 

 
</div>
  )
}

export default Footer