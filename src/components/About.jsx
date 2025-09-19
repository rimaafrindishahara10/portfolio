import { useState } from "react";
import bannerImage from "../assets/mine.jpg"

const About =()=>{

    const [data,setData]=useState({
        image:bannerImage,
        title:"Java Full Stack Developer",
        decp1:`I am a Java Full Stack Developer with hands-on experience in building small to medium-scale projects using Spring Boot. I have worked with Spring Security, REST APIs, database connections, and implemented pagination to deliver secure and efficient backend solutions.`,
        decp2:`Alongside backend expertise, I have frontend knowledge in React and Angular, which helps me create complete and user-friendly web applications. I am passionate about learning new technologies and writing clean, maintainable code.`,
        actionButton:{
            title:"Read More..",
            link:"/readmore"
        }

    })

    return(
        <>
        <div className="main-container bg-gray-100 py-12">
            <h1 className="text-center text-4xl pb-12 underline font-bold">About Me</h1>
            <div className="flex items-center">
                {/* Image Section */}
                <div className="w-full flex justify-center">
                     <img className="rounded-full w-85 h-85 object-cover shadow-lg" src={data.image} alt="profile" />
                </div>

                {/* Text Section */}
                <div className="w-full flex justify-center">
                   <div className="space-y-4 w-2/3">
                     <h1 className="text-4xl font-semibold ">{data.title}</h1>
                    <p>{data.decp1}</p>

                    <p >{data.decp2}</p>
                    <button className="hover:bg-orange-500 cursor-pointer px-2 py-1 bg-orange-500 shadow rounded-full ">{data.actionButton.title}</button>
                   </div>
                </div>

            </div>

        </div>
        </>
    )
}
export default About;