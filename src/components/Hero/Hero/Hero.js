import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeroLeft from '../HeroLeft/HeroLeft';
import HeroRight from '../HeroRight/HeroRight';
import './Hero.css';

const Hero = () => {
    return (
        <div style={{paddingTop:'100px'}}>
            <Container>
                <Row>
                    <Col xs={12} md={9}>
                        <HeroLeft/>
                    </Col>
                    <Col xs={12} md={3}>
                        <HeroRight/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;