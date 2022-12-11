import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Header.css';
import logo from '../../images/R.S.png';

const Header = () => {
    return (
        <header className='header-main fixed-top'>
            <div className='container p-lg-0'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link to='/'>
                            <img style={{ maxWidth: '80px' }} src={logo} alt="logo" />
                        </Link>
                        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className='nav-link' to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to='/about'>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to='/projects'>Projects</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to='/blog'>Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to='/contact'>Contact Me</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;