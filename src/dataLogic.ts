const fetchFileContent = async (filePath: string): Promise<string> => {
  const response = await fetch(filePath);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.text();
};

const parseJSON = (text: string): object => {
  try {
    return JSON.parse(text);
  } catch (error: any) {
    throw new Error("Error parsing JSON: " + error.message);
  }
};
export {fetchFileContent, parseJSON};
