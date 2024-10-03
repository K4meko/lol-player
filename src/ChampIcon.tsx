import {useState, useEffect} from "react";
type ChampIconProps = {
  champName: string;
};

export const ChampIcon = ({champName}: ChampIconProps) => {
  const [championsData, setChampionsData] = useState<any>(null);
  const [champID, setChampID] = useState<string | undefined>(undefined);
  useEffect(() => {
    const fetchChampionsData = async () => {
      try {
        const response = await fetch(
          "https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json"
        );
        const data = await response.json();
        setChampionsData(data);
      } catch (error) {
        console.error("Error fetching champions data:", error);
      }
    };

    fetchChampionsData();
  }, []);

  useEffect(() => {
    if (championsData) {
      const getChampIDByName = (champName: string): string | undefined => {
        const champData = championsData.data[champName];
        return champData ? champData.key : undefined;
      };

      const id = getChampIDByName(champName);
      setChampID(id);
    }
  }, [champName]);

  const url = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${champID}.png`;
  return (
    <div className="flex flex-col items-center">
      <img src={url} alt={champName} />
      <span>{champName}</span>
    </div>
  );
};
