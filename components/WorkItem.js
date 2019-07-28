import React from 'react';
import Logos from './Logos'

function WorkItem({link, srcName, title, summary}) {
    return (
        <div className='work-item-container container mx-auto'>
            <a href={link} target='_blank' className='work-item'>
                <div className='svg-container'>
                    <img className='expand' src={'../static/svg/' + srcName + '-mono.svg'} height='175' width='175' />
                    <img className='contract' src={'../static/svg/' + srcName +'.svg'} height='175' width='175' />
                </div>
                <div className='summary'>
                    <h2>{title}</h2>
                    <p>{summary}</p>
                </div>
            </a>
        </div>
    );
}

export default WorkItem;
