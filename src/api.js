const api_key="DLGhKjAt1Sf9jdMNkP3dksy7RER2";

export const getMatch=()=>{
   
    const url=`https://cricapi.com/api/matches?apikey=${api_key}`;

    return fetch(url)
    .then((response)=>response.json())
    .catch((e)=>console.log(e));
};

