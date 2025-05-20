import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <span>
      © {new Date().getFullYear()} Sahil. Crafted with <span className={styles.heart}>♥</span>
    </span>
  </footer>
);

export default Footer; 