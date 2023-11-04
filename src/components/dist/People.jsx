"use client"
import { useState, useEffect } from "react"
import { MdOutlineLaunch } from "react-icons/md"
import { FaGithub } from "react-icons/fa"

export default function Page() {
  const [response, setResponse] = useState({});
  
  useEffect(() => {
    fetch("/data.json")
      .then((dt) => dt.json())
      .then((dt) => {
        setResponse(dt);
      });
  }, []);

  return (
    <div className="flex justify-center items-center flex-col mt-8">

        <h2 className="font-semibold text-center text-3xl leading-9">Some People</h2>
      {response.card_people?.map((dat, index) => (
        <div className="card card-compact w-96 bg-base-100 grid shadow-xl scale-[80%] ml-.5 md:ml-4 max-w-md border" key={index}>
          <figure className="px-0 pb-.5 pt-2.5">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={`https://github.com/${dat.name}.png`} alt={dat.name} />
              </div>
            </div>
          </figure>
          <div className="card-body items-center text-center mt-.5 ">
            <h2 className="card-title">{dat.name}</h2>
            <p>{dat.bio}</p>
            <div className="card-actions absolute right-2.5 top-1.5">
              <div className="flex flex-row space-x-2.5">
						  	<a href={`https://github.com/${dat.name}/`} target="_blank" rel="noopener noreferrer">
				  			 <FaGithub />
				  			</a>
				  			<a href={dat.website} target="_blank" rel="noopener noreferrer">
					  			<MdOutlineLaunch />
				  			</a>
							</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
