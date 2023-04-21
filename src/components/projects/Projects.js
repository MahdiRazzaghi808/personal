import React, { useContext } from 'react'
//  style
import styles from './projects.module.css'
// components
import ProjectsMenu from './projectsMenu/ProjectsMenu'
import Project from './projectC/Project'
// context
import { MenuActiveContext } from '../../context/projectMenu/MenuActiveContextProvider'





const Projects = () => {

    const { state, dispatch } = useContext(MenuActiveContext);

 


    return (
        <div id="projects" className={styles.projects}>
            <h2 >پروژه ها</h2>

            <div>
                <ProjectsMenu />
            </div>

            <div className={styles.projectWrapper}>
                {
                    state.map(item => <Project key={item.id} data={item} />)
                }
            </div>
        </div>
    )
}

export default Projects
