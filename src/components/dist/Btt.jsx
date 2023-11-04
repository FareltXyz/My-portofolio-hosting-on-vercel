import React, { useState, useEffect } from "react";

const BackToTop = ({ showBelow = 100 }) => {
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > showBelow) {
      setShowScroll(true);
      document.getElementById('backtotop').classList.remove('translate-y-20')
    } else if (showScroll && window.pageYOffset <= showBelow) {
      setShowScroll(false);
      document.getElementById("backtotop").classList.add("translate-y-20");
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
       <button 
				 id="backtotop"
				 type="button"
				 onClick={scrollTop}
				 className="fixed right-12 bottom-12 z-[999] w-10 h-10 rounded-full border-sky-400 border">
						<span className="animate-ping absolute inline-flex h-1.5 w-1.5 right-0 top-0 rounded-full bg-sky-400 opacity-7"></span>
						<svg
							focusable="false"
							className="w-4 h-4 text-sky-400 text-center flex justify-center items-center ml-2.5"
							role="img"
							fill="#38bdf8"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
						</svg>
					</button>
    </>
  );
};

export { BackToTop };