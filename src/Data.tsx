import {useState, useEffect, useRef} from "react";
import jsonData from "./ESPORTSTMNT01_1425089.json";
import ReactPlayer from "react-player/lazy";
import {GameData} from "./types";

type JsonData = {
  Events: [GameData];
};

export const Data = () => {
  const [videoTime, setVideoTime] = useState<number>(0);
  const [gameTimes, setGameTimes] = useState<number[]>([]);
  const [data, setData] = useState<JsonData | null>(null);
  const playerRef = useRef<ReactPlayer>(null);
  const getDuration = () => {
    if (playerRef.current) {
      const currentDuration = playerRef.current.getDuration();
      if (currentDuration !== null) {
        return currentDuration;
      }
    }
    return 0;
  };

  const getAllGameTimes = (gameDataArray: GameData[]): number[] => {
    return gameDataArray.map(gameData => gameData.gameTime);
  };
  useEffect(() => {
    if (jsonData) {
      setData(jsonData as JsonData);
      if (data?.Events) {
        setGameTimes(getAllGameTimes(data.Events));
        console.log("Game times:", gameTimes);
      }
    }
    //console.log(jsonData);
  }, []);

  useEffect(() => {
    console.log("Current time:", videoTime);
  }, [videoTime]);

  //@ts-ignore
  const handleProgress = state => {
    setVideoTime(state.playedSeconds);
  };

  return (
    <div>
      <pre className="whitespace-pre-wrap text-white">
        {data?.Events.length ?? "s"}
      </pre>
      <ReactPlayer
        ref={playerRef}
        controls={true}
        url="https://www.youtube.com/watch?v=HtQsIeXyUjo"
        onProgress={handleProgress}
      />
      <pre className="whitespace-pre-wrap"></pre>
    </div>
  );
};
