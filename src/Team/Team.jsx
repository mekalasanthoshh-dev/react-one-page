import Faqs from '../FAQs/Faqs';
import team1 from '../assets/Images/team-1.jpg'
import team2 from '../assets/Images/team-2.jpg'
import team3 from '../assets/Images/team-3.jpg'
import team4 from '../assets/Images/team-4.jpg'
function Team() {  
  
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
    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3"> 
    <div className='team_card'>
    <p><img src={team1}/></p>
    <div className='team_body'>
    <h3>Walter White</h3>
    <p>Chief Executive Officer</p>
    </div>
    </div>
    </div> 
    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3"> 
    <div className='team_card'>
    <p><img src={team2}/></p>
    <div className='team_body'>
    <h3>Sarah Jhonson</h3>
    <p>Product Manager</p>
    </div>
    </div>
    </div>
    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3"> 
    <div className='team_card'>
    <p><img src={team3}/></p>
    <div className='team_body'>
    <h3>William Anderson</h3>
    <p>CTO</p>
    </div>
    </div>
    </div>
    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3"> 
    <div className='team_card'>
    <p><img src={team4}/></p>
    <div className='team_body'>
    <h3>Amanda Jepson</h3>
    <p>Accountant</p>
    </div>
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

export default Team
