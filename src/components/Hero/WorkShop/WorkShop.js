import React from 'react';
import './WorkShop.css';

const WorkShop = props => {
    const {title,img,user,time,category} = props.workshop;
    return (
        <div className='workshop border rounded'>
            
            <img  className='w-25 rounded' src={img} alt="single workshop" />
            
            <div className='ps-4'>
                <p>{category}</p>
                <h5>{title}</h5>
                <p>{user} {time} </p>
            </div>
        </div>
    );
};

export default WorkShop;