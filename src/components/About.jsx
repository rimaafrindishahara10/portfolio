import { useState } from "react";
import bannerImage from "../assets/mypic.jpg"

const About =()=>{

    const [data,setData]=useState({
        image:bannerImage,
        title:"Java Full Stack Developer",
        decp1:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur veniam impedit quam omnis harum ad fugiat doloremque qui. Tenetur, quae.`,
        decp2:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus mollitia consectetur tempora quasi eum doloribus ut et eius nobis quam molestiae, officiis earum unde amet molestias officia ratione esse?`,
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