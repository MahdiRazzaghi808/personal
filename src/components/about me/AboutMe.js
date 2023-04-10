import React from 'react'
import styles from './aboutMe.module.css'
import aboutImage from '../../asset/banner.png'
import resume from '../../asset/resume.pdf'

const AboutMe = () => {
    return (
        <div id="about" className={styles.aboutMe}>
            <div  className={styles.imageWrapper}>
                <img src={aboutImage} alt="about" />
            </div>
            <div className={styles.explain} >
                <h2>درباره من</h2>
                <p>دانشجو مهندسی عمران دانشگاه گیلان , توسعه دهنده فرانت اند , مشتاق یادگیری ,  سرگرمی ها : کتاب   فیلم   موزیک   ورزش ❤ </p>
                <p>نام : <span>مهدی رزاقی</span></p>
                <p>تاریخ تولد : <span>آبان 1380</span></p>
                <p>آدرس : <span>ایران گیلان رشت</span></p>
                <p>ایمیل : <span className={styles.email}>mahdi.razzaghi@yahoo.com</span> </p>
                <p>تلفن : <span>09920801032</span></p>
                <p><span className={styles.project}>17</span> پروژه کامل شده</p>
                <a href={resume} download="resume" className={styles.button}>دانلود رزومه</a>
            </div>
        </div>
    )
}

export default AboutMe
