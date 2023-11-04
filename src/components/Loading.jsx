"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
export default function Page() {
const [ number, setNumber] = useState(0)

	
const max = 95;

  useEffect(() => {
    const interval = setInterval(() => {
      if (number < max) {
        setNumber(number + 1);
      } else {
        clearInterval(interval);
        document.getElementById("animate").className = "rounded-3xl"
      }
    }, 25); 

    return () => {
      clearInterval(interval);
    };
  }, [number]);

  return (
      <>
        <div className="flex justify-center items-center h-screen md:w-screen md:group hover:cursor-wait">
          <div className="flex justify-center md:scale-125 flex-col items-center gap-y-7 md:h-6/12 md:w-6/12">
        <p className="relative top-7">Made By</p>
        <p className="inline-flex items-center block w-auto h-16 pb-6 text-xl font-black leading-none align-center"> MENGKODINGAN </p>
         <img id="animate" className="rounded-3xl animate-putar" src="/mengkodingan.jpg" width="100" height="100"/>
         <p>Loading...</p>
            <progress className="progress w-56" value={number} max="100"></progress>
         <p className="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none align-center"> Powered By    <Link href="https://vercel.com"><img src="/vercel.svg" className="pl-5" width='100' height='100'/></Link> </p>
          </div>
        </div>
      </>
    );
};
      