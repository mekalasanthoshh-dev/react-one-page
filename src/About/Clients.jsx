import React from 'react'
import clientlogo1 from '../assets/Images/client-1.png';
import clientlogo2 from '../assets/Images/client-2.png';
import clientlogo3 from '../assets/Images/client-3.png';
import clientlogo4 from '../assets/Images/client-4.png';
import clientlogo5 from '../assets/Images/client-5.png';
import clientlogo6 from '../assets/Images/client-6.png';
import Services from '../Services/Services';
import Testimonials from './Testimonials';

function Clients() {
  return (
    <>
      <div className='clients tb-space'>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className='client-section'>
                <ul className='client-logos'>
                  <li><img src={clientlogo1}/></li>
                  <li><img src={clientlogo2}/></li>
                  <li><img src={clientlogo3}/></li>
                  <li><img src={clientlogo4}/></li>
                  <li><img src={clientlogo5}/></li>
                  <li><img src={clientlogo6}/></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Testimonials/>
      <Services/>
    </>
  )
}

export default Clients
