import React from 'react';
import Logos from './Logos';
import Vars from '../Vars';

class Footer extends React.Component {
    render() {
        return (
            <footer id='myFooter'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-3'>
                            {/* <h2 className='logo'><a href='/'><Logos.WhiteLogo /></a></h2> */}
                        </div>
                        <div className='col-sm-2'>
                            <h5>Pages</h5>
                            <ul>
                                <li><a href='/'>Home</a></li>
                                <li><a href='/about'>About</a></li>
                                <li><a href='/work'>Work</a></li>
                            </ul>
                        </div>
                        <div className='col-sm-2'>
                            <h5>Connect</h5>
                            <ul>
                                <li><a href={Vars.github}><i className='fab fa-github'></i> GitHub</a></li>
                                <li><a href={Vars.instagram}><i className='fab fa-instagram'></i> Instagram</a></li>
                                <li><a href={Vars.linkedin}><i className='fab fa-linkedin'></i> LinkedIn</a></li>
                            </ul>
                        </div>
                        <div className='col-sm-3'>
                            <h5>Contact</h5>
                            <ul>
                                {/* <li><a href='#'><i className='fas fa-phone'></i> (250) 732-6138</a></li> */}
                                <li><a href='#'><i className='far fa-envelope'></i> awiggins@uvic.ca</a></li>
                                <li><a href='/static/resources/website-resume.pdf'><i className='fas fa-download'></i> Resume</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer-copyright'>
                    <p>© 2019 Andrew Wiggins </p>
                </div>
            </footer>
        );
    }
};

export default Footer;
