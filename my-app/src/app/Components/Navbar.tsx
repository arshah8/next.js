import Link from "next/link";
import Home from "../page";

export default function navBar (){
    return(
        <nav className="flex w-full items-center bg-black h-16">
        <div className="flex justify-center items-center h-10 w-2/12">
       <h1 className="text-white justify-center text-2xl font-sans text-center font-extrabold w-60 items-center ">
            A O T
          </h1>
            </div>  
          <div className="flex justify-between items-center text-center font-semibold font-serif h-12 w-8/12 text-white text-xl"><p>|  EREN X MIKASA </p> </div>
            <div className="flex justify-end items-center h-20 w-2/12 font-medium ">
<div className="flex font-semibold">
  <div className="flex   items-center  h-10 w-20">
            <Link href="/home" legacyBehavior><a className=" text-white">HOME</a></Link></div>

          <div className="flex   items-center  h-10 w-20">
            <Link href="/about" legacyBehavior><a className="text-white">ABOUT</a></Link></div>

          <div className="flex   items-center  h-10 w-20">
            <Link href="/blog" legacyBehavior><a className=" text-white">BLOG</a></Link></div>
</div>
          
          </div>
       
      </nav>
    )
}