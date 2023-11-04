import Typed from "react-typed";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import Nav from '@/components/dist/Nav';
import Card from '@/components/dist/Card';
import About from '@/components/dist/About';
import People from '@/components/dist/People';
import Peep from '@/components/dist/Peep';
import GetInTouch from '@/components/dist/GetInTouch';
import Pooted from '@/components/dist/Pooted'
import { BackToTop} from '@/components/dist/Btt'
import Waypoints from "@/components/dist/dust/waypoints"

export default function Page() {
  return (
    <>
          <Nav />
			 	  <BackToTop />
           <div className="pt-28">
						 <Waypoints target={'tohome'}>
                 <div id="tohome" className="grid grid-cols-1 md:grid-cols-2 pl-5 pt-0">
                    <div>
							  	  	<Peep />
							    	</div>
                    <div className="flex justify-start md:justify-center">
                       <Card />
                    </div>
                 </div>
							</Waypoints>
						 <svg xmlns="http://www.w3.org/2000/svg" className="pt-10" viewBox="0 0 1440 320"><path fill="#e3f2fd" fillOpacity="1" d="M0,128L60,149.3C120,171,240,213,360,192C480,171,600,85,720,64C840,43,960,85,1080,117.3C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
						 <Waypoints target={'toabout'}>
			    			 <div id="toabout" className="pt-0 grid grid-cols-1 md:grid-cols-2 md:bg-[#e3f2fd]">
						    	 <div className="mdm:bg-[#e3f2fd]">
						        <About />
							     </div>
						    	 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="block md:hidden"><path fill="#e3f2fd" fillOpacity="1" d="M0,128L30,138.7C60,149,120,171,180,165.3C240,160,300,128,360,149.3C420,171,480,245,540,277.3C600,309,660,299,720,277.3C780,256,840,224,900,186.7C960,149,1020,107,1080,112C1140,117,1200,171,1260,160C1320,149,1380,75,1410,37.3L1440,0L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
							     <div>
							    	 <People />
						    	 </div>
						     </div>
						 </Waypoints>
						 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="hidden md:block"><path fill="#e3f2fd" fillOpacity="1" d="M0,32L60,69.3C120,107,240,181,360,208C480,235,600,213,720,176C840,139,960,85,1080,85.3C1200,85,1320,139,1380,165.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
						 <Waypoints target={'tocontact'}>
						     <div id="tocontact" className="grid grid-cols-1 md:grid-cols-2">
							      <div>
						          <GetInTouch />
							    	</div>
				    		 </div>
							</Waypoints>
           </div>
			
			    <Pooted />
    </>
  )
}
