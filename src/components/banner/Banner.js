import React from 'react'
import styles from './banner.module.css'
import banner from "../../asset/banner.png"
export default function Banner() {
    return (

        <div className={styles.banner} id='home'>

            <div className={styles.bannerText}>
                <p>سلام</p>
                <p>من <span>مهدی رزاقی</span> هستم</p>
                <p>توسعه دهنده فرانت اند</p>
            </div>
            <div className={styles.image}>
                <img src={banner} alt="" />
            </div>
        </div>
    )
}
