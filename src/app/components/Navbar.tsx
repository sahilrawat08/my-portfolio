'use client';

import React from 'react';
import styles from './Navbar.module.css';
import { useTheme } from '../theme';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>My Portfolio</div>
      <div className={styles.linksDesktop}>
        <a href="#about" className={styles.link}>About</a>
        <a href="#projects" className={styles.link}>Projects</a>
        <a href="#skills" className={styles.link}>Skills</a>
        <a href="#contact" className={styles.link}>Contact</a>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 