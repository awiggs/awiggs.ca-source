import React from 'react';

class SkillBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <p className='skill-name'>{this.props.name}</p>
                <div className='skill-bar'><div className={'skill-' + this.props.skill}></div></div>
            </>
        );
    }
};

export default SkillBar;
