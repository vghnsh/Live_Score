const api_key = "cb7febb3-a903-4b14-b116-cd8065ca4f63";

export const getMatch = () => {
  const url = `https://api.cricapi.com/v1/currentMatches?apikey=${api_key}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((e) => console.log(e));
};
