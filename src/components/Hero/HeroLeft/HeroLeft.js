import React from 'react';
import HeroLeftDown from '../HeroLeftDown/HeroLeftDown';
import HeroLeftUp from '../HeroLeftUp/HeroLeftUp';
import './HeroLeft.css';

const HeroLeft = () => {
    return (
        <div>
            <HeroLeftUp/>
            <HeroLeftDown/>
        </div>
    );
};

export default HeroLeft;