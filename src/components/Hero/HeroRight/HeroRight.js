import React from 'react';
import { Button } from 'react-bootstrap';
import './HeroRight.css';

const HeroRight = () => {
    return (
        <div className='hero-right rounded'>
            <div>
                <img className='w-25' src="https://i.ibb.co/1r51bWz/1006657.png" alt="hand shake" />
            </div>
            <h2 className='mb-4'>Best <br /> Networking <br /> Workshops</h2>
            <p className='mb-4'>In this workshop, learn when and how to network with modern best practices.</p>

            <ul>
                <li className="mb-4">Explain the importance of networking for career-building</li>
                <li className='mb-4'>Practice modern tips for effective networking</li>
                <li>Understand the steps towards building your own network</li>
            </ul>

            <Button>Know More</Button>

        </div>
    );
};

export default HeroRight;