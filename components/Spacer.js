import React from 'react';

class Spacer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'content-spacer spacer-' + this.props.size}></div>
        );
    }
};

export default Spacer;
