import React from 'react'
import styles from './skills.module.css'

import Skill from './Skill'


const mySkills = [
  { id: 1, title: "HTML5", percent: 95 },
  { id: 2, title: "CSS3", percent: 90 },
  { id: 3, title: "JS", percent: 85 },
  { id: 4, title: "React", percent: 70 },
  { id: 5, title: "MUI", percent: 70 },
  { id: 6, title: "Tailwind", percent: 50 },
  { id: 7, title: "Bootstrap", percent: 40 },
  { id: 8, title: "Sass", percent: 50 },
]

const Skills = () => {
  return (
    <div id="skills" className={styles.skills}>
      <h2>مهارت های من</h2>

      <div className={styles.skillWrapper}>
        {
          mySkills.map(item => <Skill key={item.id} data={item} />)
        }
      </div>
    </div>
  )
}

export default Skills
