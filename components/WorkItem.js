import React from 'react';
import ChipGr8 from '../content/chipgr8.mdx';

class WorkItem extends React.Component {
    constructor(props) {
        super(props);
    }

    showText = () => {
        console.log('Click!');
        var text = document.getElementById('chipgr8-text');
        // text.classList.toggle('hide');
        text.classList.toggle('slide-work-text');

        document.getElementById('mono').classList.toggle('hide');
        document.getElementById('color').classList.toggle('hide');
    }

    render() {
        return (
            <>
                <div className='work-item hvr-float no-select' onClick={this.showText}>
                    <div className='work-title d-inline-block'>
                        <h2>Chip-Gr8</h2>
                        <h3 className='work-subtitle'>Application</h3>
                    </div>
                    <div className='work-pic d-inline-block'>
                        <img id='mono' className='work-pic-svg' src='../static/svg/chipgr8-mono.svg' />
                        <img id='color' className='work-pic-svg hide' src='../static/svg/chipgr8.svg' />
                    </div>
                    <div className='click-more d-block'>
                        <p className='d-inline-block'>Show more</p><i className='fas fa-arrow-down d-inline-block lm-arrow'></i>
                    </div>
                </div>
                <div id='chipgr8-text' className='work-text'>
                    <ChipGr8 />
                </div>
            </>
        );        
    }
};

export default WorkItem;
