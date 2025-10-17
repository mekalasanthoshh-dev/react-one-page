import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';
import ScrollTrigger from 'react-scroll-trigger';

function Counter() {
    let clients = 232;
    let projects = 521;
    let hourssupport = 1454;
    let workers = 32;
    const { ref, inView } =  useInView({
        triggerOnce: false, // Animate only once
        threshold: 0.3, // 30% visible
    });
    return (
        <>
        <div className='cconter' ref={ref}> 
        <div className='counter_section tb-space'>
        <div className="container">
        <div className="row">
        <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
        <div className='counter-inner text-center'> 
        <h2>{inView && <CountUp start={0} end={clients} duration={2} />}</h2>
        <p>Clients</p>        
        </div>
        </div>
        <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
        <div className='counter-inner text-center'>
        <h2>{inView && <CountUp start={0} end={projects} duration={3.5} />}</h2>
        
        <p>Projects</p>        
        </div>
        </div>
        <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
        <div className='counter-inner text-center'>
        <h2>{inView && <CountUp start={0} end={hourssupport} duration={3} />}</h2>
        <p>Hours Of Support</p>        
        </div>
        </div>
        <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
        <div className='counter-inner text-center'>
        <h2>{inView && <CountUp start={0} end={workers} duration={3} />}</h2>
        <p>Workers</p>        
        </div>
        </div>
        </div>
        </div>
        </div> 
        </div> 
        </>
        
    )
}

export default Counter
