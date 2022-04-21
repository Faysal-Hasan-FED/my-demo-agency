import React from 'react';
import './HeroLeftUp.css';

const HeroLeftUp = () => {
    return (
        <div className='hero-left-up text-white rounded'>
           <div style={{padding:'60px'}}>
           <h2>Lorem ipsum dolor, sit amet consectetur adipisicing.</h2>
            <div style={{paddingTop:'50px'}} className='d-flex'>
                <img style={{backgroundColor:'lightgray', borderRadius:'50%',padding:'5px'}} src="https://i.ibb.co/BTjdBWB/jane-smith.webp" alt="user image" />
                <div className='ms-5'>
                    <p className='custom-name'>Jane Smith</p>
                    <p>May 15,2021. 
                        <img className='ms-3' style={{width:'10%'}} src="https://i.ibb.co/kg9wTmq/1168847.png" alt="watch" />
                          2min </p>
                </div>
            </div>
           </div>
        </div>
    );
};

export default HeroLeftUp;