import React from 'react';
import Logos from './Logos'

class Footer extends React.Component {
    render() {
        return (
            <footer id='myFooter'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <h2 className='logo'><a href='#'><Logos.Logo /></a></h2>
                        </div>
                        <div className='col-sm-2'>
                            <h5>Get started</h5>
                            <ul>
                                <li><a href='#'>Home</a></li>
                                <li><a href='#'>Sign up</a></li>
                                <li><a href='#'>Downloads</a></li>
                            </ul>
                        </div>
                        <div className='col-sm-2'>
                            <h5>About us</h5>
                            <ul>
                                <li><a href='#'>Company Information</a></li>
                                <li><a href='#'>Contact us</a></li>
                                <li><a href='#'>Reviews</a></li>
                            </ul>
                        </div>
                        <div className='col-sm-2'>
                            <h5>Support</h5>
                            <ul>
                                <li><a href='#'>FAQ</a></li>
                                <li><a href='#'>Help desk</a></li>
                                <li><a href='#'>Forums</a></li>
                            </ul>
                        </div>
                        <div className='col-sm-3'>
                            <div className='social-networks'>
                                <a href='#' className='github'><i className='fab fa-github'></i></a>
                                <a href='#' className='instagram'><i className='fab fa-instagram'></i></a>
                                <a href='#' className='linkedin'><i className='fab fa-linkedin'></i></a>
                            </div>
                            <button type='button' className='btn btn-default'>
                                <a href='/' className='m-2'><i className='fas fa-download'></i>Resume</a>
                            </button>
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
