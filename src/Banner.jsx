import React, { useEffect, useState } from 'react'
import Aboutus from './About/Aboutus'
import axios from 'axios' 
import { Bannerdata } from './Bannerdata';

function Banner() {
    let [bannerdata, setbanner] = useState(Bannerdata);
    // useEffect(()=>{
    //     axios.get("http://localhost:3000/banner")
    //     .then((res) => setbanner(res.data))
    //     .catch((error) => alert(error))
    // }, [])
    return ( 
        <> 
        <div className='banner tb-space'  id="home">
        <div className='container'>
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className='banner-top'>
        <h1 className='text-center'>One Page Bootstrap</h1>
        <h1 className='text-center'>Website Template</h1>
        <p className='text-center'>We are team of talented designers making websites with Bootstrap</p>
        <button type='button' className='d-block btn-lg text-center btn standardbtn text-white m-auto'>Get Started</button>
        </div>        
        <div className="banner-bottom">
        <div className="row">        
        {
            bannerdata && bannerdata.map((bannercard) => {
                return(
                    <>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div className="banner-card bg-white p-4"> 
                    <img width="36" height="36" src= {bannercard.image}/> 
                    <h3 className='my-3'>{bannercard.title}</h3>
                    <p>{bannercard.text}</p>
                    </div>
                    </div>
                    </>
                )
            }) 
        }
        </div>
        </div>
        </div>
        </div>
        </div>
        </div> 
        <Aboutus/>
        </>
    )
}

export default Banner
