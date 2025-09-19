import bannerImage from "../assets/mypropic.jpg"
import bannerBackImage from "../assets/Banner.png"
import Typed from "typed.js"
import { useRef, useEffect } from "react";

const Banner=()=>{

    const el = useRef(null)
    useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Backend Developer","Frontend Developer","Full Stack Java Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 150,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop:true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
 return (
    <>

    <div style={
           { backgroundImage:`url(${bannerBackImage})`,
             }

        }  className="main-container h-100 flex items-center">

        <div  className="w-full flex justify-center text-white">
        <div className="w-2/3">
            {/* {text} */}
        <h3 className="text-2xl font-semibold">Hi,I am</h3>
        <h1 className="mt-2 text-3xl font-bold">Rima Afrin Dishahara</h1>
        <h2 className="mt-2 text-3xl">
  And I am a <span ref={el}></span>
</h2>

        <p className="mt-2 mb-3">I am a Full Stack Java Developer and Frontend Developer skilled in React and Angular, passionate about building modern, efficient, and user-friendly web applications.</p>

         <div className="icons-container flex space-x-5 mt-2 mb-5">
            <a className="hover:bg-orange-500 cursor-pointer px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center bg-gray-800">
                <i className="text-2xl fa-brands fa-facebook"></i>

            </a>
            <a className="hover:bg-orange-500 cursor-pointer px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center bg-gray-800">
            <i className="text-2xl  fa-brands fa-square-instagram"></i></a>
            <a className="hover:bg-orange-500 cursor-pointer px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center bg-gray-800">
            <i className="text-2xl  fa-brands fa-square-linkedin"></i></a>
            <a className="hover:bg-orange-500 cursor-pointer px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center bg-gray-800">
            <i className="text-2xl  fa-brands fa-youtube"></i></a>
        </div>

        <a className="hover:bg-orange-500 cursor-pointer px-2 py-1 bg-orange-500 shadow rounded-full " href="/contact">Contact</a>
       
        </div>
        </div>

        <div className="w-full flex justify-center">
        {/* Image */}
        <img className="rounded-full w-70 h-70 object-cover shadow-lg" src={bannerImage} alt="profile" />
        </div>


    </div>
    </>
 )
}
export default Banner;