import React from 'react'
import aboutimage from '../assets/Images/about_image.jpg' 
import Clients from './Clients'

function Aboutcontent() {
    return (
        <>
        <div className='aboutcontent tb-space'>
        <div className="container">
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div className='about-left'>
        <img src={aboutimage} className='aboutimage'/>
        </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div className='about-right'>
        <h1 className='mb-3'>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h1>
        <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i></p>
        <ul>
        <li><i className="bi bi-arrow-return-right"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        <li><i className="bi bi-arrow-return-right"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
        <li> <i className="bi bi-arrow-return-right"></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
        </ul>
        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        <Clients/>
        </>
    )
}

export default Aboutcontent
