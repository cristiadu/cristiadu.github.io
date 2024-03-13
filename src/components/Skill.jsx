import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ skill }) => {
    return (
        <div className="col-md-3 col-xs-6">
            <span className="thumbnail">
                <img className="img-responsive" src={'images/' + skill.image} alt={skill.text} />
            </span>
        </div>
    );
};

Skill.propTypes = {
    skill: PropTypes.shape({
        image: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
};

export default Skill;