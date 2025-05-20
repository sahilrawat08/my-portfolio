import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from './Contact.module.css';

const socials = [
  { icon: FaGithub, label: 'GitHub', url: 'https://github.com/sahilrawat08' },
  { icon: FaLinkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
  { icon: FaEnvelope, label: 'Email', url: 'mailto:rawatsahil1508@gmail.com' },
];

const Contact: React.FC = () => (
  <section className={styles.contact}>
    <h2 className={styles.heading}>Contact</h2>
    <div className={styles.socials}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconlink}
          aria-label={s.label}
        >
          <s.icon className={styles.icon} />
        </a>
      ))}
    </div>
  </section>
);

export default Contact; 