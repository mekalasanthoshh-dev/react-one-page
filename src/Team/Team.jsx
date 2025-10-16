import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Faqs from '../FAQs/Faqs';
import { Teams } from '../Team';

function Team() {
  let [teamdata, setteam] = useState(Teams);
  
  // useEffect(() => {
    //   axios.get("http://localhost:3002/Team")
  //   .then((res) => setteam(res.data))
  //   .catch((error) => alert(error))
  // }, [])
  
  return (
    <>
    <div className="team tb-space" id='team'>
    <div className="container">
    <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
    
    <div className="team-content">
    <h1 className="text-center pagetitle py-2">Team</h1>
    <p className="text-center mb-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    
    
    <div className="row">
    {
      teamdata && teamdata.map((data) => {
        return(
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3"> 
          <div className='team_card'>
          <p><img src={data.image}/></p>
          <div className='team_body'>
          <h3>{data.name}</h3>
          <p>{data.designation}</p>
          </div>
          </div>
          </div>
        )
      })
    }
    
    </div>
    
    
    </div>
    </div>
    </div>
    </div>
    </div>
    <Faqs/>
    
    </>
  )
}

export default Team
