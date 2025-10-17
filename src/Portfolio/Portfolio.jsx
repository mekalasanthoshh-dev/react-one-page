import React, { useState } from "react";
import Menu from "./Menu"; 


function Portfolio() {
    const [items, setItems] = useState(Menu);
    const [active, setActive] = useState(false);
    const filterItem = (categItem) => {
        const updateItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });
        setItems(updateItems);
        setActive(true);
    };
    return (
        <>
        <div className='portfolio tb-space' id="portfolio">
        <div className="container" >
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h1 className="text-center pagetitle py-2">Portfolio</h1>
        <p className="text-center mb-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        <div className='portfolio-tabs mb-3'>
        <ul className="nav nav-pills justify-content-center">
        <li className="nav-item">
        <a className={active ? "nav-link" : "nav-link active"} href="#;"
        onClick={() => setItems(Menu)}>All</a>
        </li>
        <li className="nav-item">
        <a className={active ? "nav-link" : "nav-link active"} href="#;" onClick={() => filterItem("App")}>App</a>
        </li>
        <li className="nav-item"><a className={active ? "nav-link" : "nav-link active"}
        href="#;" onClick={() => filterItem("Card")}>Card</a>
        </li>
        <li className="nav-item">
        <a className={active ? "nav-link" : "nav-link active"} href="#;" onClick={() => filterItem("Web")}>Web</a>
        </li>
        </ul>
        </div>        
        <div className="row">
        {items.map((elem) => {
            const { id, name, image } = elem;
            
            return (
                
                <div className="col-sm-4" id={id}>
                <div className="portfoloio-image">
                <img className="img-fluid" src={image} alt={name} />                
                <h5 className="card-title mb-0">{name}</h5> 
                </div>
                </div>
            );
        })}
        </div>
        </div>
        </div>
        </div>
        </div>
      </>
    )
}

export default Portfolio
