import React from 'react';

class Scroll extends React.Component {
    componentDidMount() {
        // When the user scrolls the page, execute myFunction 
        window.addEventListener('scroll', () => {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementsByClassName("progress-bar")[0].style.width = scrolled + "%";
        });
    };

    render() {
        return (
            <div className='progress-header'>
                <div className='progress-container'>
                    <div className='progress-bar'></div>
                </div> 
            </div>
        );
    }
};

export default Scroll;
