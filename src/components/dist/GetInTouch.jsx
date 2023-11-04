import SendMessage from "@/lib/SendMessage";
import toast from "react-hot-toast";

export default function Page() {
	const formSubmit = async (e) => {
    e.preventDefault();
    var d = document.getElementById("contactFormSubmit");
    d.innerHTML = "Sending...";
    d.classList.add("btn-disabled");
    d.classList.add("loading");
    try {
      var res = await SendMessage(e);
    } catch {
      toast.error("Internal server error.");
    } finally {
      toast[res.type](res.message);
    }
    d.innerHTML = "Send Message";
    d.classList.remove("btn-disabled");
    d.classList.remove("loading");
  };

	return (
		<>
		 <div 
			 className="items-center flex justify-center">
	  	  <div 
					className="card w-96 bg-base-100 shadow-xl border scale-[80%] md:scale-[110%]">
				 <form 
					 id="contactForm" 
					 onSubmit={formSubmit}>
          <div 
	        	className="card-body">
            <h2 
		        	className="card-title text-center ">
		        	Get In Touch
	        	</h2>
	        	<div 
		        	className="flex flex-row justify-center space-x-8 pt-3 pb-4">
			        <div 
			        	className="w-[40%]">
				        <p>
			        		Name
			        	</p>
                <input 
				        	className="focus:outline-none p-2.5 w-[100%] overflow-x-auto border border-solid border-indigo-500 rounded-xl border-2" 
				        	type="text" 
					        placeholder="Name"
			        		name="from"
									required/>
			        </div>
		        	<div 
								className="w-[40%]">
			        	<p>
									Email
								</p>
	  	          <input 
				        	className="focus:outline-none p-2.5 w-[100%] overflow-x-auto border border-solid border-indigo-500 rounded-xl border-2" 
				        	type="email" 
				        	placeholder="email" 
				        	name="email"
									required/>
			        </div>
		        </div>
	        	<span> Message </span>
	        	<textarea 
  		        className="focus:outline-none h-28 p-1.5 overflow-y-auto border border-solid border-indigo-500 rounded-2xl border-2" 
	          	placeholder="enter a text..."
		        	name="msg"
							required></textarea>
            <div 
		        	className="card-actions justify-end">
              <button 
								className="btn btn-primary btn-block text-white normal-case text-neutral mt-2.5 rounded-3xl"
								type="submit" 
								id="contactFormSubmit">
								Submit
							</button>
            </div>
          </div>
				 </form>
      </div>
		 </div>
		</>
	)
}