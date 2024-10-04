import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HttpsIcon from "@mui/icons-material/Https";
import appConfig from "config/appConfig";
import { LinearProgress } from "@mui/material";
import { colors } from "lib/colors";

const SplashScreen = () => {
  return (
    <div className="flex items-center justify-center text-gray-300">
      <div className="text-center">
        <WhatsAppIcon sx={{ fontSize: 60 }} />

        <div className="mt-5 min-w-[50%] w-[400px]">
          <LinearProgress
            sx={{
              backgroundColor: colors.primaryGreen,
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#4caf50",
              },
              height: 2,
            }}
          />
        </div>

        <div className="mt-5 text-lg font-medium text-gray-200">
          {appConfig.appName}
        </div>

        <div className="mt-2 font-medium text-gray-600">
          <HttpsIcon /> End to end encrypted
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
