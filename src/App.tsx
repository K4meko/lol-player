import {useEffect, useState} from "react";
import ButtonPink from "./assets/components/ButtonPink";
import ButtonBlue from "./assets/components/ButtonBlue";
import json from "./assets/ESPORTSTMNT01_1425089.json";
function App() {
  const [fileContent, setFileContent] = useState<string>("");

  useEffect(() => {
    // Fetch the contents of the .txt file
    fetch("/ESPORTSTMNT01_1425089.txt")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("response", response);
        return response.text();
      })
      .then(text => {
        setFileContent(text);
        console.log("File content:", text);
      })
      .catch(error => {
        console.error("Error fetching the file:", error);
      });
  }, []);
  return (
    <div className="bg-black w-full h-screen ">
      <ButtonPink>Click Me</ButtonPink>
      <ButtonBlue>Click Me</ButtonBlue>
      <pre className="whitespace-pre-wrap">{fileContent}</pre>
    </div>
  );
}

export default App;
