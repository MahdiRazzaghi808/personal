import React from 'react'
import styles from './footer.module.css'
const Footer = () => {
    return (
        <div className={styles.footer}>

            <div className={styles.about}>
                <h3>درباره من</h3>
                <p>دانشجو مهندسی عمران دانشگاه گیلان , توسعه دهنده فرانت اند , مشتاق یادگیری ,  سرگرمی ها : کتاب   فیلم   موزیک   ورزش ❤ </p>
            </div>

            <div className={styles.contact}>
                <h3> تماس با من</h3>
                <div>
                    <p>mahdi.razzaghi@yahoo.com</p>
                    <p>09920801032</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
