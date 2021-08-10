import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import kitchen from '../../images/365A4710CCF144CD946C8D469A4931BC.webp';
import hotTub from '../../images/529CF6D8393740B2AFBD723AE9D05464.webp';
import ski from '../../images/A363790A8D094571960825BA1A267C89.webp';
import views from '../../images/04FEACF1016D45BAABA497FE7F4ADABB.webp';
import { CardGroup } from 'react-bootstrap';

const FeatureCards = () => {

    return (
        <>
            <div className="feature_card_section">
                <Row sm={1} md={2} lg={2}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hotTub} />
                        <Card.Body>
                            <Card.Title>Relax</Card.Title>
                            <Card.Text>
                                Private, oversized in-ground hot tub
                </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ski} />
                        <Card.Body>
                            <Card.Title>Activities</Card.Title>
                            <Card.Text>
                                Ski in ski out, located alongside Whitefish Mountain Resort ski lift
                </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={views} />
                        <Card.Body>
                            <Card.Title>View</Card.Title>
                            <Card.Text>
                                Breathtaking views of Whitefish Mountain Ski Resort & Glacier National Park
                </Card.Text>
                        </Card.Body>
                    </Card>
                    </Row>
            </div>
        </>
    );
}

export default FeatureCards;