const api_key="7Rlv4bvSvOgL1w1k59Yn0xkPrHK2";

export const getMatch=()=>{
   
    const url=`https://cricapi.com/api/matches?apikey=${api_key}`;

    return fetch(url)
    .then((response)=>response.json())
    .catch((e)=>console.log(e));
};

