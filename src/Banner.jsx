import React, { useEffect, useState } from 'react'
import banner1 from '../src/assets/Images/banner-section-1.png'
import banner2 from '../src/assets/Images/banner-section-2.png'
import banner3 from '../src/assets/Images/banner-section-3.png'
import banner4 from '../src/assets/Images/banner-section-4.png'
function Banner() { 
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
        
        
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
        <div className="banner-card bg-white p-4"> 
        <img width="36" height="36" src= {banner1}/> 
        <h3 className='my-3'>Lorem Ipsum</h3>
        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
        </div>
        </div>
        
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
        <div className="banner-card bg-white p-4"> 
        <img width="36" height="36" src= {banner2}/> 
        <h3 className='my-3'>Sed ut perspiciatis</h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
        </div>
        </div> 
        
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
        <div className="banner-card bg-white p-4"> 
        <img width="36" height="36" src= {banner3}/> 
        <h3 className='my-3'>Magni Dolores</h3>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia voluptate</p>
        </div>
        </div> 
        
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
        <div className="banner-card bg-white p-4"> 
        <img width="36" height="36" src= {banner4}/> 
        <h3 className='my-3'>Nemo Enim</h3>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
        </div>
        </div>
        
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>  
        </>
    )
}

export default Banner
