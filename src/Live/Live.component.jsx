import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import './Live.style.css';
import stadium from '../Stadium.jpg';
import Fade from 'react-reveal/Fade';
import dateFormat from 'dateformat';
import Score from './Score.component';

 
function Live({...match}) {
    var ConditionalLink = match.matchStarted ? Link : 'div';
   
    
    return (
        
        <div className="live_match"
        style={
            {
            display: 'flex',
            justifyContent:'center',
            backgroundImage:`url(${stadium})`,
            backgroundRepeat:'repeat-y',
            backgroundSize:' cover',
            backgroundPositionY: 'center',
            height:'30%',
            width:'100%'
            
            }
        }
        >
        <ConditionalLink className="hov"  to={{
            pathname:"/full",
            data:match.unique_id
        }}>
        <Fade delay={350}>
        
            
        <div className="data">
            <div className="color match_name center">
                T20 Cricket
            </div>
           
            <div className="team1"> 
            <div className="color match_name size center">
               {
                   match["team-1"]
               }
              
            </div>
            <div className="center match_name">
            <div className="colorB"> VS </div>
            </div>
            </div>
            <div className="team2">
            <div className="color match_name size center">
                {
                    match["team-2"]
                }
            </div>
            
            </div>
            </div>
            <div className="color center">
                {
                dateFormat(match.date, "mmmm dS, yyyy")
                }
            </div>
            <div className="color center team1">
                {
                    match.matchStarted ? <Score unique_id={match.unique_id}/> 
                    :<div>Not Yet Started</div> 
                }
                
            </div>
           
           
            </Fade>
        
        </ConditionalLink>
        </div>
       
            
           
               
               
              
            
           
          
            
        
      
            
            
            
       
    )
}

export default withRouter(Live);
