import React from 'react'
import Logos from './Logos';
import Socials from './Socials';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            burgerActive: false,
            stickyHeader: ''
        };
    }

    activateHamburger = () => {
        var burger = document.getElementById('hamburger-icon');
        this.state.burgerActive = !this.state.burgerActive;
        this.state.burgerActive ? burger.classList.add('is-active') : burger.classList.remove('is-active');

        var nav = document.getElementsByClassName('header')[0];
        this.state.burgerActive ? nav.classList.add('fs-nav') : nav.classList.remove('fs-nav');
    }

    render() {
        return (
            <nav className='navbar navbar-expand-sm navbar-light container header'>
            <button className='navbar-toggler hamburger hamburger--minus'
                id='hamburger-icon'
                onClick={this.activateHamburger}
                type='button' 
                data-toggle='collapse' 
                data-target='#navbar' 
                aria-controls='navbarSupportedContent' 
                aria-expanded='false' 
                aria-label='Toggle navigation'
            >
                <span className='hamburger-box'>
                    <span className='hamburger-inner'></span>
                </span>
            </button>
            <a className='mobile-only ml-auto d-inline-block' href='/'>
                <Logos.WhiteLogo />
            </a>
                <a id='home-logo' className='navbar-brand-two mx-auto d-inline-block desktop-only' href='/'>
                    {/* <img src='/static/Logo.png' width='75' height='75' alt='' /> */}
                    <Logos.Logo />
                </a>
                <div className='collapse navbar-collapse flex-grow-1 text-right' id='navbar'>
                    <ul className='navbar-nav ml-auto flex-nowrap'>
                        <li className='mobile-only nav-item nav-title'>
                            <p className='nav-link m-2'>
                                Pages
                            </p>
                        </li>
                        <li className='mobile-only nav-item'>
                            <a 
                                href='/' 
                                className='nav-link m-2 menu-item'
                            >Home</a>
                        </li>
                        <li className='nav-item'>
                            <a 
                                href='/about' 
                                className='nav-link m-2 menu-item'
                            >About</a>
                        </li>
                        <li className='nav-item'>
                            <a 
                                href='/work' 
                                className='nav-link m-2 menu-item'
                            >Work</a>
                        </li>
                        <li className='nav-item nav-button'>
                            <a 
                                href='/static/resources/website-resume.pdf' 
                                className='nav-link m-2 menu-item'
                            ><i className='fas fa-download'></i>Resume</a>
                        </li>
                        <li className='mobile-only nav-item nav-title'>
                            <p className='nav-link m-2'>
                                Connect With Me
                            </p>
                        </li>
                        <li className='mobile-only nav-item'>
                            <Socials className='nav-soc' />
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;