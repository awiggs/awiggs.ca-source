import React from 'react';
import Content from '../content/awiggs.mdx';

class WorkItem extends React.Component {
    constructor(props) {
        super(props);
    }

    showText = () => {
        var id = this.props.name + '-text';
        var id2 = this.props.name + '-mono';
        var id3 = this.props.name + '-color';
        document.getElementById(id).classList.toggle('slide-work-text');
        document.getElementById(id2).classList.toggle('hide');
        document.getElementById(id3).classList.toggle('hide');
    }

    render() {
        return (
            <>
                <div className='work-item hvr-float no-select' onClick={this.showText}>
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
                </div>
            </>
        );        
    }
};

export default WorkItem;
