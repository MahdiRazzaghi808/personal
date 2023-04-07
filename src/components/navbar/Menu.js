import React, { useState } from 'react'
import { Link } from 'react-scroll';



import styled from 'styled-components'
import styles from './menu.module.css';


const Div = styled.div`
@media (max-width: 992px){
      transform:${props => props.open ? "translateX(0)" : "translateX(100%)"}
}

`

const itemsMenu = [
    { id: 1, content: 'صفحه اصلی', href: 'home' },
    { id: 2, content: 'درباره من', href: 'about' },
    { id: 3, content: 'مهارت ها', href: 'skills' },
    { id: 4, content: 'پروژه ها', href: 'projects' },
    { id: 5, content: 'ارتباط با من', href: 'contact-me' },
]




const Menu = ({ open }) => {
    const { openState, setOpenState } = open

    const closeHandler = () => {
        setOpenState(false)
    }

    return (
        <>
            <Div className={styles.wrapper} open={openState}>

                <ul className={styles.menu}>


                    {itemsMenu.map(item => <li key={item.id} className={styles.navLink}>

                        <Link activeClass={styles.active} to={item.href} spy={true} smooth={true} offset={-128} duration={200} onClick={closeHandler}>

                            {item.content}

                        </Link>
                    </li>)}

                </ul>

            </Div>
        </>
    )

}

export default Menu
