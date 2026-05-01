
import React, { useRef,useState } from "react";


const UploadResume: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFileName(file.name); // store file name in state
      console.log("Selected file:", file.name);
    }
  };

  const handleButtonClicks = () => {
  window.open("https://pk.linkedin.com/", "_blank"); 
};

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">   
     <div className="w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto    px-4 sm:px-6 lg:px-8 border border-uploadborder mt-8 sm:mt-10 md:mt-12 lg:mt-20 mb-8 sm:mb-10 md:mb-12 lg:mb-18  opacity-100 rotate-0 rounded-md p-6 bg-uploadbg">
      <h2 className="font-Lato font-normal text-[32px] leading-[52px] tracking-[0px] text-black">Upload Resume</h2>

      <p className="font-Roboto font-normal text-[18px] leading-[30px] tracking-[0px] text-formtext mb-4">
        Just a few more steps to finish your application, beginning with uploading your resume or link your LinkedIn profile.
      </p>

      <p className="font-Roboto text-foamtext font-normal text-[16px] leading-[30px] tracking-[0px] mb-4">
        If uploading, upload either DOC, DOCX, HTML, PDF, or TXT file types (1MB max)
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        {/* Apply with LinkedIn */}
        <button
          type="button"
          onClick={handleButtonClicks}
          className="flex items-center cursor-pointer justify-center gap-2 border border-foamtext text-formtext font-Roboto font-normal text-[16px] leading-6 tracking-[0px] text-center align-middle  rounded-md px-5 py-2.5 transition-colors duration-200"
        >
          <img src="/Upload/Linkedin.png" alt="LinkedIn Icon" className="w-4 h-4" />
          Apply with LinkedIn
        </button>

        {/* Upload from Device */}
        <button
        type="button"
        onClick={handleButtonClick}
        className="flex items-center justify-center gap-2 border border-foamtext text-formtext font-Roboto font-normal text-[16px] leading-6 tracking-[0px] text-center align-middle rounded-md px-5 py-2.5 transition-all duration-200 hover:bg-gray-100"
      >
        <img src="/Upload/Upload.png" alt="Upload Icon" className="w-4 h-4" />
        Upload From Device
      </button>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      {/* 👇 Show selected file name if available */}
      {selectedFileName && (
        <p className="text-[14px] text-center  text-formtext mt-3">
        <span className="font-medium">{selectedFileName}</span>
        </p>
      )}
  
      </div>
    </div>
    </div>
  );
};

export default UploadResume;
