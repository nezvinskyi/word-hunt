import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <hr style={{ width: '90%', marginTop: 20 }} />
      <span className="name">
        Made by{' '}
        <a href="https://github.com/nezvinskyi" target="__blank">
          Dmitry
        </a>
      </span>
    </footer>
  );
};

export default Footer;
