import React from "react";

const DownloadCvButton = () => {
  return (
   <a
  href="/assets/cv.pdf"
  target="_blank"      
  rel="noopener noreferrer"
  download="Rima-Afrin-Dishahara.pdf" 
  className="hover:bg-orange-500 cursor-pointer px-2 py-1 bg-orange-500 shadow rounded-full "
>
  Download CV
</a>
  );
};

export default DownloadCvButton;
