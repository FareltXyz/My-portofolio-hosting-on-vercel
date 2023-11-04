import Typed from "react-typed";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import { useState, useEffect } from "react"
import Repository from "@/lib/Repository";
import GetHit from "@/lib/GetHit";
import { Toaster } from "react-hot-toast";

export default function Page() {
  const [props, setProps] = useState({ repository: 'fetching...', hit: 'fetching...' });

	useEffect(() => {
		async function fetchData() {
        let repository = await Repository();
        setProps({ repository, hit: 'fetching...' });
        let hit = await GetHit();
        setProps({ wakatime: 'fetching...', repository, hit });
      }

      fetchData();

	}, [])
	
return (

	<>
		<Toaster />
	  <div className={`md:max-w-screen-sm md:top-[60px] md:sticky md:scale-[85%]`}>
			<h1 className="text-3xl font-extrabold leading-10 tracking-tight text-left text-base-900 sm:leading-none md:text-3xl lg:text-4xl">Hi There <span className="animate-wave inline-block">👋🏻</span>, I&apos;m M. FAREL W.
			</h1>
			<p className="md:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block md:mt-0 mt-2">
				{`Someone who likes to `}
				<Typed
				strings={["coding ", "eating ", "gaming ", "watching", "editing"]}
				typeSpeed={142}
				backSpeed={50}
				backDelay={59}
				loop
				/>
			</p> {` `}
			<br/>
			<div className="pt-5">
			  	<div className="flex flex-row space-x-2">
					  <a href="#about" className="btn btn-ghost border border-cyan-300 rounded-full"><FaUserAlt /> About</a>
					  <a className=" btn btn-ghost border border border-red-500 rounded-full"><FaPhoneAlt /> Contact</a>
			  	</div>
					<img src="/peep.svg" className="md:w-[80%] md:h-[75%] items-center"/>
			</div>	
		</div>
	</>
		)
}