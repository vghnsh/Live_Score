import React,{useState,useEffect} from 'react';
import './Score.style.css';

function Score({unique_id}) {
    const [score,setScore]=useState([]);
    
    
  useEffect(()=>{
    async function fscore(){
     
        const score_url=`https://cricapi.com/api/cricketScore?unique_id=${unique_id}&apikey=DLGhKjAt1Sf9jdMNkP3dksy7RER2`;
        return await fetch(score_url).then((res)=>res.json())
         
    }
    
    async function getScore(){
        await fscore()
            .then((data)=> setScore(data))
            .catch((e)=>console.log(e));
        
    }
    getScore();
    
  
    
   

  },[]);
  
  
    return (
        <div>
            <div className="color center msize bg">{score?.score}</div> 
            <div className=" color center">{score?.stat}</div>
        </div>
    )
}

export default Score;
