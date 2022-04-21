import React from 'react';
import { Container } from 'react-bootstrap';
import './Categories.css';

const Categories = () => {
    return (
        <div style={{paddingTop:'100px'}}>
            <Container className='categories text-center'>
                <div style={{width:'21%'}} className='card p-3 shadow-sm '>
                    <div className="text-center">
                    <img className='w-25'  src="https://i.ibb.co/BgTVmVz/1466288.png" alt="advertising image" />
                    </div>
                    <h2>Advertising</h2>
                </div>
                <div style={{width:'21%'}} className='card p-3 shadow-sm'>
                    <div className="text-center">
                    <img className='w-25'  src="https://i.ibb.co/FBtGfPJ/1821246.png" alt="case studies image" />
                    </div>
                    <h2>Case Studies</h2>
                </div>
                <div style={{width:'21%'}} className='card p-3 shadow-sm'>
                   <div className="text-center">
                   <img className='w-25' src="https://i.ibb.co/xDQVCj7/566359.png" alt="innovation" />
                   </div>
                    <h2>Innovation</h2>
                </div>
                <div style={{width:'21%'}} className='card p-3 shadow-sm'>
                   <div className="text-center">
                   <img className='w-25'  src="https://i.ibb.co/25mDp7b/561184.png" alt="management image" />
                   </div>
                    <h2>Management</h2>
                </div>
            </Container>
        </div>
    );
};

export default Categories;