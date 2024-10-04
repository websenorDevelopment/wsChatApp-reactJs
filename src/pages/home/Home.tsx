import IntroIcon from "assets/icons/intro.jpg";
import ComputerIcon from "@mui/icons-material/Computer";
import appConfig from "config/appConfig";

const Home = () => {
  return (
    <div className="bg-primary-light h-full border-b-[5px] border-primary-green flex justify-center items-center">
      <div className="text-center">
        <img src={IntroIcon} className="w-[250px] mx-auto" />
        <div className="mt-6 text-gray-300 text-[24px]">
          Keep your phone connected
        </div>
        <div className="mt-3 text-sm text-center text-gray-500 max-w-[90%] mx-auto">
          {appConfig.appName} connects to your phone to sync messages. To reduce
          data usage, connect your phone to Wi-Fi.
        </div>
        <div className="border-b border-gray-700 py-4" />

        <div className="mt-4 flex gap-2 justify-center text-sm items-center">
          <ComputerIcon fontSize="small" />
          <div>
            {appConfig.appName} is available for Mac.{" "}
            <span className="cursor-pointer text-[#07ad99]">Get it here.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
