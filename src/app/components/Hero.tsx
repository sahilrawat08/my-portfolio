import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => (
  <section className={styles.hero}>
    <div className={styles.window}>
      <div className={styles.titlebar}>
        <span>👾 Welcome</span>
      </div>
      <div className={styles.content}>
        <h1>Hi, I'm <span className={styles.accent}>Sahil Rawat</span></h1>
        <h2>learning to code</h2>
        <p>
          I am a computer science undergrad . i am a full stack developer . i am on my journey to become a software engineer<br/>
          <span className={styles.blink}>_</span>
        </p>
      </div>
    </div>
  </section>
);

export default Hero; 