import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import WorkShop from '../WorkShop/WorkShop';
import './HeroLeftDown.css';

const HeroLeftDown = () => {
    const [workshops , setWorkshops] = useState([]);
    useEffect(()=>{
        fetch('./heroPartData.json')
        .then(res => res.json())
        .then(data => setWorkshops(data))
    },[])
    return (
        <div style={{paddingTop:'20px'}}>
    <Container>
        <Row xs={1} md={2} className="g-4">
        {
                workshops.map(workshop => <WorkShop workshop={workshop} key={workshop.id}></WorkShop>)
        }
        </Row>

    </Container>

        

            
        </div>
    );
};

export default HeroLeftDown;