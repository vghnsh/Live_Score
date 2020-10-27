import React,{useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';
import Score from '../Live/Score.component';
import { Accordion, Card,Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Full.style.css';
import Fade from 'react-reveal/Fade';


function Full({}) {
    
    let location = useLocation();

    const[id,setId]=useState([]);
    const [full,setFull]=useState([]);
    const[url,setUrl]=useState([]);
    
  
    useEffect(() => {
        if(location.data){
            setId(location.data)
            //console.log(location.data)
        }
        else{
            const data = localStorage.getItem("my_id");
            if (data) {
                setId(data);
            }
        }
        localStorage.setItem("my_id",id);
    },[id]);

      
    useEffect(()=>{
       
      async function f_full_score(){
       
          const full_url=`https://cricapi.com/api/fantasySummary?unique_id=${id}&apikey=DLGhKjAt1Sf9jdMNkP3dksy7RER2`;
            setUrl(full_url);
          await fetch(full_url)
          .then((res)=>res.json())
          .then((fdata)=> setFull(fdata))
          .catch((e)=>console.log(e));
           
      }
      
      
      f_full_score();
  
      
    },[url]);

    console.log(id);
    console.log(full?.data);
   
    
    
    
    //console.log(full.data.winner_team);
    

    
    //console.log(full.data.batting);
    
    return (
        <div>
            <div>
            <Score unique_id={location.data}/>
            </div>
            <Accordion defaultActiveKey="0">
                <Card >
                    <div className="bgg">
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div>
                    <b>
                        {
                        full?.data?.batting[0]?.title
                        }
                        </b>
                    </div>
                        
                    
                    </Accordion.Toggle>
                    </div>
                    <Fade delay={400}>

                    
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                       <Table variant="dark" responsive>
                            <tr>
                                <th>Batsman</th>
                                <th>Status</th>
                                
                                <th>Balls</th>
                                <th>Runs</th>
                            </tr>
                            {
                                full?.data?.batting[0]?.scores?.map((scene)=>(
                                <tr>
                                    <td>
                                    {scene.batsman}
                                    </td>
                                    <td>
                                    {scene["dismissal-info"].length > 0 ? scene["dismissal-info"]: "Batting" }
                                    </td>
                                    
                                    <td>
                                    {scene.B}
                                    </td>
                                    <td>
                                    <b>{scene.R}</b>
                                    </td>
                                </tr>
                                ))
                            }
                       </Table>
                       <Table variant="dark" responsive>
                            <tr>
                                <th>Bowler</th>
                                <th>Economy</th>
                                <th>Overs</th>
                                <th>Runs</th>
                            </tr>
                            {
                                full?.data?.bowling[0]?.scores?.map((scene)=>(
                                <tr>
                                    <td>
                                    {scene.bowler}
                                    </td>
                                    <td>
                                    {scene.Econ}
                                    </td>
                                    
                                    <td>
                                    <b>{scene.O}</b>
                                    </td>
                                    <td>
                                    <b>{scene.R}</b>
                                    </td>
                                </tr>
                                ))
                            }
                       </Table>
                    </Card.Body>
                    </Accordion.Collapse>
                    </Fade>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    <div>
                    <b>
                        {
                        full?.data?.batting[1]?.title
                        }
                        
                    </b>
                    </div>
                    </Accordion.Toggle>
                    <Fade delay={400}>

                    
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                       <Table variant="dark" responsive>
                            <tr>
                                <th>Batsman</th>
                                <th>Status</th>
                                
                                <th>Balls</th>
                                <th>Runs</th>
                            </tr>
                            {
                                full?.data?.batting[1]?.scores.map((scene)=>(
                                <tr>
                                    <td>
                                    {scene.batsman}
                                    </td>
                                    <td>
                                    {scene["dismissal-info"].length > 0 ? scene["dismissal-info"]: "Batting" }
                                    </td>
                                    
                                    <td>
                                    {scene.B}
                                    </td>
                                    <td>
                                    <b>{scene.R}</b>
                                    </td>
                                </tr>
                                ))
                            }
                       </Table>
                       <Table variant="dark" responsive>
                            <tr>
                                <th>Bowler</th>
                                <th>Economy</th>
                                <th>Overs</th>
                                <th>Runs</th>
                            </tr>
                            {
                                full?.data?.bowling[1]?.scores.map((scene)=>(
                                <tr>
                                    <td>
                                    {scene.bowler}
                                    </td>
                                    <td>
                                    {scene.Econ}
                                    </td>
                                    
                                    <td>
                                    <b>{scene.O}</b>
                                    </td>
                                    <td>
                                    <b>{scene.R}</b>
                                    </td>
                                </tr>
                                ))
                            }
                       </Table>
                    </Card.Body>
                    </Accordion.Collapse>
                    </Fade>
                </Card>
            </Accordion>
    
        </div>
        )
}

export default Full;
