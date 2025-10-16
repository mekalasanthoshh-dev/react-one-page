import Counter from "./Counter";

function Aboutus() {
    return(
        <>
        <div className="about-section tb-space" id="aboutus">
        <div className="container" >
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        
        <div className="aboutus">
        <h1 className="text-center pagetitle py-2">About Us</h1>
        <p className="text-center mb-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div className="about_left">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <ul>
        <li><i className="bi bi-check2-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        <li><i className="bi bi-check2-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
        <li><i className="bi bi-check2-circle"></i>   Ullamco laboris nisi ut aliquip ex ea commodo</li>
        </ul>
        </div>
        
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div className="about_left">
        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button type="button" className="btn-lg text-center btn standardbtn text-white m-auto">Read More</button> 
        </div>
        </div>
        </div>
        </div> 
        </div>
        </div>
        </div>
        </div>
        <Counter/>
        </>
    )
}
export default Aboutus;