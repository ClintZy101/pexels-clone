import LinkToHomeButton from "../buttons/LinkToHomeButton";
import LitUpBorderButton from "../buttons/LitUpBorderButton";

const VidDownloadModal = ({setIsOpen}) => {
    const message =
      "Sorry! Pexels API doesn't offer a downloadable video file at the moment...";
  
    return (
      <div className="w-screen h-[1000px] bg-black bg-opacity-80 absolute top-0 z-50">
        <div className="relative md:w-[500px] md:h-[300px] w-full  inline-block bg-white z-50 rounded-lg mx-auto mt-[150px] md:grid place-items-center gap-5 p-5">
            <div className=" w-full flex justify-end">
            <LinkToHomeButton />
            </div>
          
          <div className="grid gap-5 ">
            <h1 className="font-bold text-xl ">Message:</h1>
            <p className="text-black font-semibold inline ">{message}</p>
            <LitUpBorderButton title="Okay..." onClick={()=> setIsOpen(false)}/>
          </div>
        </div>
      </div>
    );
  };

  export default VidDownloadModal