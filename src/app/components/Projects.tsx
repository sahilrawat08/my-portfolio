import React from 'react';
import { projects } from '../data/projects';
import styles from './Projects.module.css';

const Projects: React.FC = () => (
  <section className={styles.projects}>
    <h2 className={styles.heading}>Projects</h2>
    <div className={styles.grid}>
      {projects.map((p) => (
        <div className={styles.card} key={p.title}>
          <img src={p.image} alt={p.title} className={styles.image} />
          <div className={styles.info}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className={styles.tech}>{p.tech.join(' • ')}</div>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
              View Project ↗
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 