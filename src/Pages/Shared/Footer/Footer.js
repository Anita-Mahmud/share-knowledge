import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                   <Link to='/'>
                   <img src={logo} alt='book' className='w-20'/>
                    <p className="link link-hover font-lobster text-xl">Share Knowledge</p>
                   </Link>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Book Selling</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;