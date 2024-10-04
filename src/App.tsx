import ChatList from "layouts/sidebar/ChatList";
import "./app.css";
import Routing from "routing/Routing";
import SplashScreen from "layouts/SplashScreen";
import { useEffect, useState } from "react";
import appConfig from "config/appConfig";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, appConfig.splashProgress);
  }, []);

  return (
    <div className="container">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div className="w-full h-full flex">
          <ChatList />
          <div className="flex-grow text-gray-400">
            <Routing />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
