import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

const Header = ({menuOpen, handleClick}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navlinks = [
    {
      name: 'About',
      link: '#about'
    },
    {
      name: 'Careers',
      link: '#about' 
    }, 
    {
      name: 'Events',
      link: '#creation'
    }, 
    {
      name: 'Products',
      link: '#creation'
    }, 
    {
      name: 'Support',
      link: '#footer'
    }
  ]

  return (
    <header className={clsx('header', isScrolled && 'scrolled')}>
      <div className="header-container wrapper">
        <img className="logo" src="images/logo.svg" />
        
        {menuOpen 
          ? (<img className="close-icon" src="images/icon-close.svg" alt="close icon" onClick={handleClick} />)
          : (<img className="hamburger-icon" src="images/icon-hamburger.svg" alt="hambuger icon" onClick={handleClick} />)}

        {/* Navigation Links */}
        <ul className="nav-list">
          {navlinks.map((item, index) => (
            <li key={index}><a href={item.link}>{item.name}</a></li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
