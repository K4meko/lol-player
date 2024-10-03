import {useState, useEffect, useRef} from "react";
import jsonData from "./ESPORTSTMNT01_1425089.json";
import ReactPlayer from "react-player/lazy";

type JsonData = {
  Events: any;
};

export const GameData = () => {
  const [videoTime, setVideoTime] = useState<number>(0);
  const [data, setData] = useState<JsonData | null>(null);
  const playerRef = useRef<ReactPlayer>(null);
  useEffect(() => {
    if (jsonData) {
      setData(jsonData as JsonData);
    }
    console.log(jsonData);
  }, []);

  useEffect(() => {
    console.log("Current time:", videoTime);
  }, [videoTime]);
  const handleProgress = (state: {playedSeconds: number}) => {
    setVideoTime(state.playedSeconds);
  };

  const handlePause = () => {
    if (playerRef.current) {
      if (playerRef.current.getCurrentTime() > videoTime) {
        const currentTime = playerRef.current.getCurrentTime();
        setVideoTime(currentTime);
      }
    }
  };
  return (
    <div>
      <pre className="whitespace-pre-wrap text-white">
        {data?.Events.length ?? "s"}
      </pre>
      <ReactPlayer
        ref={playerRef}
        controls={true}
        url="https://www.youtube.com/watch?v=0bhFagWP_W0"
        onProgress={handleProgress}
      />
      <pre className="whitespace-pre-wrap"></pre>
    </div>
  );
};
