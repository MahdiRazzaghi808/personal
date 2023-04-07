import React from 'react'
import styles from './projects.module.css'

import Project from './Project'
import { myProjects } from "../../api/api"


const Projects = () => {
    return (
        <div id="projects" className={styles.projects}>
            <h2 >پروژه ها</h2>
            <div className={styles.projectWrapper}>
                {
                    myProjects.map(item => <Project key={item.id} data={item}/>)
                }
            </div>
        </div>

    )
}

export default Projects
