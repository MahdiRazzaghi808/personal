import React from 'react'


import styled from 'styled-components'
import styles from './menu.module.css';


const Div = styled.div`
@media (max-width: 992px){
      transform:${props => props.open ? "translateX(0)" : "translateX(100%)"}
}

`

const Menu = ({ open }) => {

    return (
        <>
            <Div className={styles.wrapper} open={open}>

                <ul className={styles.menu}>

                    <li>
                        <a href="#" >صفحه اصلی</a>
                    </li>

                    <li>
                        <a href='#about' smooth>درباره من</a>
                    </li>

                    <li>
                        <a href="#skills">مهارت ها</a>
                    </li>

                    <li>
                        <a href="#projects">پروژه ها</a>
                    </li>

                    <li>
                        <a href="#contact-me">ارتباط با من</a>
                    </li>
                </ul>

            </Div>
        </>
    )

}

export default Menu
