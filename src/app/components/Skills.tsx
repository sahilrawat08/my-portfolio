'use client';

import React from 'react';
import { skills } from '../data/skills';
import styles from './Skills.module.css';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

const Skills: React.FC = () => {
  const getIcon = (name: string) => {
    const iconName = name.toLowerCase().replace(/\s+/g, '');
    return (FaIcons as any)[`Fa${iconName}`] || (SiIcons as any)[`Si${iconName}`] || FaIcons.FaCode;
  };

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.skillsContainer}>
        <h2>Skills</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => {
            const Icon = getIcon(skill.name);
            return (
              <div key={index} className={styles.skillCard}>
                <Icon className={styles.skillIcon} />
                <h3 className={styles.skillName}>{skill.name}</h3>
                <p className={styles.skillDescription}>{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills; 