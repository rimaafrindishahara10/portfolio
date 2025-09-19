import { useState } from "react";

const Header=()=>{

    const[brandName,setBrandName]= useState("Rima Afrin Dishahara");
    const[menuLink,setMenuLink]= useState([
        
        {
            title:"Home",
            link:"/home",
            id:1
        },
        {
            title:"About",
            link:"/about",
            id:2
        },
        {
            title:"Skills",
            link:"/skills",
            id:3
        },
        {
            title:"Portfolio",
            link:"/portfolio",
            id:4 
        },
        {
            title:"Contact",
            link:"/contact",
            id:5 
        },
         
    ]);
    const[actionButton,setActionButton] = useState([
        {title:"Hire Me",
         link:"/hire-me"
        },
        {title:"Download CV",
         link:"/downloadcv"
        },
        
    ])


    return(
        <>

        <div className="h-15 border-0 main flex justify-between items-center px-10 bg-gray-100">
            <div>
                {/* {brand logo} */}
                <h1 className="text-1xl font-bold">{brandName}</h1>
            </div>

            <div className="space-x-4">
                 {/* {menu links} */}
                {menuLink.map((link)=>(
                     <a key={link.id} href={link.link}className="hover:text-orange-600">{link.title}</a>
                ))}
                 
                </div>

                 <div className="flex gap-3">
                 {/* {buttons} */}
                 {actionButton.map((button)=>(
                    <a href={button.link} className="px-2 py-1 bg-orange-500 shadow rounded-full ">{button.title}</a>
                 ))}
                 
                </div>


        </div>

        </>
    )
}
export default Header;