import bannerBackImage from "../assets/Banner.png"

const Expertise =()=>{
    return(
        <>
        <div  className="main-container ">
            <h1 className="text-center text-4xl font-bold underline">My Expertise </h1>
            {/* box section */}
            <div className="box-container items-center flex mt-8">
                <div style={
                           { backgroundImage:`url(${bannerBackImage})`,
                             }
                
                        }  className="flex justify-center text-white py-5 ">
                    <div className="w-2/3 text-center space-y-3 ">
                        {/* text container */}
                    <h1 className="text-3xl font-semibold">I Love These Technologies</h1>
                    <p>I love Java, Spring Boot, Microservices, REST APIs, React, and Angular. Passionate about building full-stack apps with clean, efficient, user-friendly code.</p>
                      <button className="hover:bg-orange-500 cursor-pointer px-2 py-1 bg-orange-500 shadow rounded-full ">Hire Me</button>
                    </div>
                </div>
                <div className="flex justify-center">
                    {/* skills container */}
                    <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
                        <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">Core Java</p>
                    <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">Advanced Java</p>
                    <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">OOPs</p>
                    <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">Spring Boot Rest API</p>
                    <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">Spring MVC</p>
                    <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">Spring Data JPA</p>
                    <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">Spring Security</p>
                    <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">Maven & Gradle</p>
                    <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">MySQL</p>
                    <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">PostgreSQL/Oracle</p>
                    <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">Jasper Report</p>
                    <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">Docker</p>
                    <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">JDBC</p>
                    <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">Git & GitHub</p>
                    
                    <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">Angular-19</p>
                    <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">React JS</p>
                    <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">JavaScript</p>
                    <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">Bootstrap</p>
                    <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">SASS</p>
                    <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">Tailwind CSS</p>
                    <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">CSS</p>
                    <p className=" px-2 py-1 w-fit mt-2 hover:bg-orange-500 cursor-pointer bg-gray-300 shadow rounded-full ">HTML</p>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}
export default Expertise;