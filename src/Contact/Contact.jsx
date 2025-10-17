import React from 'react' 

function Contact() {
    return (
        <>
        <div className='contact tb-space' id='contact'>
        <div className="container">
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h1 className="text-center pagetitle py-2">Contact</h1>
        <p className="text-center mb-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        <div className='contact_map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.293287576242!2d78.40080347369202!3d17.49350759974228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f483111dab%3A0xa066455aa8a54049!2sNIVSEE%20Technology%20Pvt.Ltd%20%7C%20Best%20Website%20Development%20%7C%20Digital%20Marketing%20%7C%20Logo%20%7C%20Broacher%20Designing%20Company%20Hyderabad!5e0!3m2!1sen!2sin!4v1760596429517!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='address-section mt-5'>
        <div className='row'>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div className='addresslist'>
        <span><i className="bi bi-geo-alt"></i></span>
        <h2>Address</h2>
        <p>A108 Adam Street, New York, NY 535022</p>
        </div>
        <div className='addresslist'>
        <span><i className="bi bi-telephone"></i></span>
        <h2>Call Us</h2>
        <p>+1 5589 55488 55</p>
        </div>
        <div className='addresslist'>
        <span><i className="bi bi-envelope"></i></span>
        <h2>Email Us</h2>
        <p>info@email.com</p>
        </div>        
        </div>
        
        <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">
        <div className='contact-form'>
        <form>
        
        <div className="row mb-3">
        <div className="col col-sm-12 namefiels">
        <input type="text" className="form-control" placeholder="Your name"/>
        </div>
        <div className="col col-sm-12">
        <input type="email" className="form-control" placeholder="Your Mail"/>
        </div>
        </div>
        
        <div className="row mb-3">
        <div className="col">
        <input type="text" className="form-control" placeholder="Subject"/>
        </div>
        </div>
        
        <div className="row mb-3">
        <div className="col">
        <textarea rows={5} className='form-control' placeholder='Message'></textarea>
        </div>
        </div>
        
        <div className="row mb-3">
        <div className="col">
        <button type='button' className='btn standardbtn text-white'>Send Message</button>
        </div>
        </div>
        
        </form>
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

export default Contact
