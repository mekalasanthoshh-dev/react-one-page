import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Calltoaction from './Calltoaction';
import { servicedata } from '../servicedata';

function Services() {
    let [servicedatas, serservicedata] = useState(servicedata);
    // useEffect(()=>{
    //     axios.get("http://localhost:3001/servicedata")
    //     .then((res) => serservicedata(res.data))
    //     .catch((error) => alert(error))
    // }, [])
    return (
        <>
        <div className='services tb-space' id='services'>
        <div className="container">
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h1 className="text-center pagetitle py-2">Services</h1>
        <p className="text-center mb-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        <div className='services'> 
        {
            servicedatas && servicedatas.map((data) => {
                return(
                    <>
                    {/* <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3"> */}
                    <div className="banner-card bg-white p-5 text-center">
                    <h4><i className={data.image}></i></h4>
                    <h3 className='my-3'>{data.title}</h3>
                    <p>{data.text}</p>
                    </div>
                    {/* </div> */}
                    </>
                )
            }) 
        }
        </div>
        
        </div>
        </div>
        </div>
        </div>
        <Calltoaction/>
        
        </>
    )
}

export default Services
