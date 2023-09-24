import React from 'react'
import styles from './footer.module.css'
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.wrapper}>

                    <div className={styles.about}>
                        <h3>درباره من</h3>
                        <p>دانشجو مهندسی عمران دانشگاه گیلان , توسعه دهنده فرانت اند , مشتاق یادگیری ,  سرگرمی ها : کتاب   فیلم   موزیک   ورزش ❤ </p>
                    </div>

                    <div className={styles.contact}>
                        <h3> تماس با من</h3>
                        <div>
                            <p>
                                <a href="mailto:mahdi_razzaghi@yahoo.com" dir="ltr">mahdi_razzaghi@yahoo.com</a>
                            </p>
                            <p>
                                <a href="tel:09920801032" dir="ltr">09920801032</a>
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Footer
