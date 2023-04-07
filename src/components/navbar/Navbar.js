import React, { useState } from 'react'
import Menu from './Menu'

import logo from '../../asset/logo.svg'
import styled from 'styled-components'
import styles from './navbar.module.css'




const Div = styled.div`
cursor: pointer;
display:none;
z-index:102;
    div{
    width: 32px;
    height: 0.2rem;
    background-color: #fff;
    border-radius: 0.5rem;
    transform-origin:5px;
    transition: all 0.2s linear;

    &:nth-child(1) {
        transform:${(props) => props.open ? "rotate(45deg)" : "rotate(0)"};
               
        }

    &:nth-child(2) {
        margin: 0.25rem 0;
        transform:${(props) => props.open ? "translateX(-100%)" : "translateX(0)"};
        opacity:${(props) => props.open ? 0 : 1}
        }


    &:nth-child(3) {
        transform:${(props) => props.open ? "rotate(-45deg)" : "rotate(0)"};
              
        }
    }

    

    @media (max-width: 992px){
        display:flex;
        flex-direction: column;
    }

`




const Navbar = () => {
    const [openState, setOpenState] = useState(false)

    const clickHandler = () => {
        setOpenState(prev => !prev)
    }


    return (
        <div className={styles.navbar}>
            <div className="container">
                <div className={styles.wrapper}>

                    <a href="https://github.com/MahdiRazzaghi808" className={styles.logo}><img src={logo} alt="logo" /></a>

                    <Div open={openState} onClick={clickHandler}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </Div>
                    <Menu open={{ openState, setOpenState }} />

                </div>
            </div>
        </div>
    )

}

export default Navbar
