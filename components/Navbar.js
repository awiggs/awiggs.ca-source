import React from 'react'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {burgerActive: false};

        this.activateHamburger = this.activateHamburger.bind(this);
        this.dynamicStickyHeader = this.dynamicStickyHeader.bind(this);
    }

    activateHamburger = () => {
        var burger = document.getElementById('hamburger-icon');
        this.state.burgerActive = !this.state.burgerActive;
        this.state.burgerActive ? burger.classList.add('is-active') : burger.classList.remove('is-active');
    }

    dynamicStickyHeader = () => {
        console.log('Scrolled!');
        var header = document.getElementsByClassName('header');
        if (window.scrollY > 0) {
            header.classList.add('sticky-header');
        } else {
            header.classList.remove('sticky-header');
        }
    }

    render() {
        return (
            <nav className='navbar navbar-expand-sm navbar-light header' onScroll={this.dynamicStickyHeader}>
            <button className={ this.state.burgerActive ? 'is-active' : '' + "navbar-toggler hamburger hamburger--spin"}
                id='hamburger-icon'
                onClick={this.activateHamburger}
                type="button" 
                data-toggle="collapse" 
                data-target="#navbar" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                {/* <span className="navbar-toggler-icon"></span> */}
                <span className='hamburger-box'>
                    <span className='hamburger-inner'></span>
                </span>
            </button>
            <a className='mobile-nav-logo ml-auto d-inline-block' href='/'>
                <img src='/static/Logo.png' width='50' height='50' alt=''></img>
            </a>
        
                <div className="collapse navbar-collapse flex-grow-1 text-left" id="navbar">
                    <ul className="navbar-nav mr-auto flex-nowrap">
                        <li className="nav-item">
                            <a 
                                href="/" 
                                className='nav-link m-2 menu-item'
                            >home</a>
                        </li>
                        <li className="nav-item">
                            <a 
                                href="/" 
                                className='nav-link m-2 menu-item'
                            >resume</a>
                        </li>
                        <li className="nav-item">
                            <a 
                                href="#about" 
                                className='nav-link m-2 menu-item'
                            >about</a>
                        </li>
                        <li className="nav-item">
                            <a 
                                href="/work" 
                                className='nav-link m-2 menu-item'
                            >work</a>
                        </li>
                    </ul>
                </div>
                <a className='navbar-brand-two mx-auto d-inline-block' href='/'>
                    <img src='/static/Logo.png' width='50' height='50' alt=''></img>
                </a>
            </nav>
        );
    }
}

export default Navbar;



// export default ({ page }) => (
//     <nav className='navbar navbar-expand-sm navbar-light header'>
//     <button className={ this.state.burgerActive ? 'is-active' : '' + "hamburger hamburger--collapse"}
//         id='hamburger-icon'
//         onClick="activateHamburger()"
//         type="button" 
//         data-toggle="collapse" 
//         data-target="#navbar" 
//         aria-controls="navbarSupportedContent" 
//         aria-expanded="false" 
//         aria-label="Toggle navigation"
//     >
//         {/* <span className="navbar-toggler-icon"></span> */}
//         <span className='hamburger-box'>
//             <span className='hamburger-inner'></span>
//         </span>
//     </button>

//         <div className="collapse navbar-collapse flex-grow-1 text-right" id="navbar">
//             <ul className="navbar-nav mr-auto flex-nowrap">
//                 <li className="nav-item">
//                     <a 
//                         href="/" 
//                         className={ (page == 'about' ? 'nav-about ' : '') + 'nav-link m-2 menu-item'}
//                     >home</a>
//                 </li>
//                 <li className="nav-item">
//                     <a 
//                         href="/" 
//                         className={ (page == 'about' ? 'nav-about ' : '') + 'nav-link m-2 menu-item'}
//                     >resume</a>
//                 </li>
//                 <li className="nav-item">
//                     <a 
//                         href="#about" 
//                         className={ (page == 'work' ? 'nav-work ' : '') + 'nav-link m-2 menu-item'}
//                     >about</a>
//                 </li>
//                 <li className="nav-item">
//                     <a 
//                         href="#work" 
//                         className={ (page == 'blog' ? 'nav-blog ' : '') + 'nav-link m-2 menu-item'}
//                     >work</a>
//                 </li>
//             </ul>
//         </div>
//         <a className='navbar-brand-two mx-auto d-inline-block' href='/'>
//             <img src='/static/Logo.png' width='50' height='50' alt=''></img>
//         </a>
//     </nav>
// );