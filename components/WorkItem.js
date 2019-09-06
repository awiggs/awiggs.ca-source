import React from 'react';

class WorkItem extends React.Component {
    constructor(props) {
        super(props);
    }

    toggleText = (name) => {
        var text = name + '-text';
        var mono = name + '-mono';
        var color = name + '-color';
        var anchor = name + '-anchor';
        document.getElementById(text).classList.toggle('slide-work-text');
        document.getElementById(mono).classList.toggle('hide');
        document.getElementById(color).classList.toggle('hide');
        document.getElementById(anchor).scrollIntoView({behavior: 'smooth'});
    }

    render() {
        return (
            <>
                <div className='work-item hvr-float no-select' onClick={ () => this.toggleText(this.props.name) }>
                    <a id={ this.props.name + '-anchor' } href={ '#' + this.props.name }></a>
                    <div className='work-title d-inline-block'>
                        <h2>{this.props.title}</h2>
                        <h3 className='work-subtitle'>{this.props.type}</h3>
                    </div>
                    <div className='work-pic d-inline-block'>
                        <img id={this.props.name + '-mono'} className='work-pic-svg' src={'../static/svg/' + this.props.name + '-mono.svg'} />
                        <img id={this.props.name + '-color'} className='work-pic-svg hide' src={'../static/svg/' + this.props.name + '.svg'} />
                    </div>
                    <div className='click-more d-block'>
                        <p className='d-inline-block'>Show more</p><i className='fas fa-arrow-down d-inline-block lm-arrow'></i>
                    </div>
                </div>
                <div id={this.props.name + '-text'} className='work-text'>
                    {this.props.content}
                    <a onClick={ () => this.toggleText(this.props.name) } className='btn' role='button' aria-pressed='true'>Collapse</a>
                </div>
            </>
        );        
    }
};

export default WorkItem;
