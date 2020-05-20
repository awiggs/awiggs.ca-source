import React from 'react';

class Availability extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='availability'><span className='availability-dot'></span><p>{'Currently ' + this.props.text}</p></div>
        );
    }
};

export default Availability;
