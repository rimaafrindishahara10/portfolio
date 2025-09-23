import React from "react";

const DownloadCvButton = () => {
  const handleDownload = () => {
    fetch("http://localhost:8080/download?fileName=Rima-Afrin-Dishahara(UpdatedCV).pdf")
      .then((response) => {
        if (!response.ok) {
          throw new Error("File not found");
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Rima-Afrin-Dishahara(UpdatedCV).pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        console.error("Download error:", error);
      });
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
