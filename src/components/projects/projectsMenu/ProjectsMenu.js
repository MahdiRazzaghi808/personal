import React, { useState, useContext } from 'react'
// style
import styles from './projectsMenu.module.css';
// context
import { MenuActiveContext } from '../../../context/projectMenu/MenuActiveContextProvider'

const menuItem = [{ main: 'all', data: 'همه' }, { main: 'react', data: 'ری اکت' }, { main: 'js', data: 'جاوا اسکریپت' }, { main: 'static', data: 'استاتیک' }]

function ProjectsMenu() {

    const { state, dispatch } = useContext(MenuActiveContext)

    const [activeMenu, setActiveMenu] = useState(0)

    const clickHandler = (main, id) => {
        dispatch({ type: main })
        setActiveMenu(id);
    }

    return (
        <div className={styles.wrapper}>

            <ul className={styles.projectsMenu}>
                {
                    menuItem.map((item, index) => <li key={index} className={activeMenu === index ? styles.active : ''} onClick={() => clickHandler(item.main, index)}>{item.data}</li>)
                }
            </ul>


        </div>
    )
}

export default ProjectsMenu