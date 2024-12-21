import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    //console.log("Use effect is called!!!");

    const handleOnline = () => {
      //console.log("Online handler");
      setIsOnline(true);
    };
    const handleOffline = () => {
      //console.log("offline handler");
      setIsOnline(false); // we are creating handleoffline online fucntion coz while unmounting it shd be the same fuction
    };
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);
  return isOnline;
};

export default useOnlineStatus;
