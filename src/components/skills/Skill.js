import React from 'react'

import styles from './skill.module.css'
const Skill = ({ data }) => {
    return (
        <div className={styles.skill}>
            <div className={styles.header}>
                <p>{data.percent}</p>
                <p>{data.title}</p>
            </div>
            <div className={styles.showPercent}>
                <div style={{ width: `${data.percent}%` }} ></div>
            </div>

        </div>
    )
}

export default Skill
