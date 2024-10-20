import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div> 
      
     <div className="flex justify-center items-center w-full">
  <Image 
    src="/erenjager.jpg" 
    alt="ErenJager standing with two swords in his hands" 
    width={1920} 
    height={1164} 
   className="object-cover" 
  />
</div>

<div className="flex h-14 w-3"></div>

<div className="flex justify-center w-full">
<div className="flex text-7xl font-semibold font-serif justify-center items-end"> <h2>Attack on Titan Series</h2>
</div>
</div>

<div className="flex justify-center w-full">
<div className="flex justify-center h-56 w-11/12 items-center  font-thin font-serif text-xl">
<p className="flex justify-center text-justify">Attack on Titan is an epic story set in a world where humanity is on the brink of extinction, hiding behind massive walls to protect themselves from terrifying creatures known as Titans. Amidst this chaos, the bond between Eren and Mikasa shines brightly. Growing up together in a world filled with fear, Mikasa’s fierce loyalty to Eren drives her to protect him at all costs. As they face unimaginable dangers, their relationship deepens, filled with moments of love and heartache. Eren struggles with his newfound powers and what they mean for their future, while Mikasa grapples with her feelings for him. Together, they navigate a harsh world, showing us that even in the darkest times, the connections we hold dear can light the way forward.</p>
</div>
</div>
<div className="flex h-5 w-5"></div>

<div className="flex justify-center w-full">
<div className="flex h-1 w-5"></div>
<div className="flex justify-center items-center w-4/12">
  <Image 
    src="/attacktitan.jpg" 
    alt="Attack Titan (Eren) Fighting" 
    width={1920} 
    height={1164} 
   className="rounded-xl" 
  />
</div>
<div className="flex h-1 w-4"></div>
<div className="flex justify-center items-center w-4/12 ">
  <Image 
    src="/eren+mikasa.jpg" 
    alt="Eren and Miaksa's Potrait" 
    width={1920} 
    height={1164} 
   className="rounded-xl" 
  />
</div>
<div className="flex h-1 w-4"></div>
<div className="flex justify-center items-center w-4/12 ">
  <Image 
    src="/walltitan.jpg" 
    alt="Mikasa attacking wall titan" 
    width={1920} 
    height={1164} 
   className="rounded-xl" 
  />
</div>
<div className="flex h-1 w-5"></div>
</div>
<div className="flex h-9 w-3"></div>


<div className="flex justify w-full">
<div className="flex h-1 w-5"></div>
<div className="flex justify items-center w-6/12">
  <Image 
    src="/erenred.jpg" 
    alt="EREN" 
    width={1980} 
    height={1200} 
   className="rounded-xl" 
  />
</div>

<div className="flex h-1 w-5"></div>
<div className="flex justify items-center w-6/12">
  <Image 
    src="/allthree.jpg" 
    alt="EREN" 
    width={1920} 
    height={1200} 
   className="rounded-xl" 
  />
</div>
<div className="flex h-1 w-5"></div>
</div>
<div className="flex h-7 w-3"></div>





</div>
  );
}