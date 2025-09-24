import React from "react";

const DownloadCvButton = () => {
  const handleDownload = () => {
   
    const fileUrl = "/assets/cv.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
  
    link.setAttribute("download", "Rima-Afrin-Dishahara.pdf");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="hover:bg-orange-500 cursor-pointer px-2 py-1 bg-orange-500 shadow rounded-full "
    >
      Download CV
    </button>
  );
};

export default DownloadCvButton;
