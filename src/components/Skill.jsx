import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card } from 'react-bootstrap';

const Skill = ({ skill }) => {
    return ( 
        <Col md={3} xs={6}>
            <Card className="skill-card">
                <Card.Img variant="top" src={'images/' + skill.image} alt={skill.text} responsive />
            </Card>
        </Col>
    );
};

Skill.propTypes = {
    skill: PropTypes.shape({
        image: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
};

export default Skill;