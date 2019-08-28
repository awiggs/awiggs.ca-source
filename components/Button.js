import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href={this.props.link} class='btn btn-dark' role='button' aria-pressed='true'>{this.props.text}</a>
        );
    }
};

export default Button;
