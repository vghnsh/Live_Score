import React,{useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';
import Score from '../Live/Score.component';
import { Accordion, Card,Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Full.style.css';

function Full() {
    

    let location = useLocation();
    console.log(location);
    const [full,setFull]=useState([]);

    
    useEffect(()=>{
      function f_full_score(){
       
          const full_url=`https://cricapi.com/api/fantasySummary?unique_id=${location.data}&apikey=DLGhKjAt1Sf9jdMNkP3dksy7RER2`;
          return fetch(full_url).then((res)=>res.json())
           
      }
      
      async function getfScore(){
          await f_full_score()
              .then((fdata)=> setFull(fdata))
              .catch((e)=>console.log(e));
          
      }
      getfScore();
      
    },[]);
    
    //console.log(full.data.winner_team);
    console.log(full?.data);

    
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
                        full?.data?.batting[0].title
                        }
                        </b>
                    </div>
                        
                    
                    </Accordion.Toggle>
                    </div>
                   
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
                                full?.data?.batting[0]?.scores.map((scene)=>(
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
                                full?.data?.bowling[0]?.scores.map((scene)=>(
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
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    <div>
                    <b>
                        {
                        full?.data?.batting[1].title
                        }
                        
                    </b>
                    </div>
                    </Accordion.Toggle>
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
                </Card>
            </Accordion>
    
        </div>
        )
}

export default Full;
