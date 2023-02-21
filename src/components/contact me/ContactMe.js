import React from 'react'
import styles from './ContactMe.module.css'
import IconContent from './IconContent';


// import { FaPhoneAlt } from "react-icons/fa";
// import { FaRegEnvelope } from "react-icons/fa";

const contentDetails = [
    { id: 1, title: 'تلگرام', icon: "telegram", href: "https://t.me/Mahdi_razzaghi808" },
    { id: 2, title: 'اینستاگرام', icon: "instagram", href: "https://instagram.com/mahdi_razzaghi0101?igshid=YmMyMTA2M2Y=" },
    { id: 3, title: 'گیتهاب', icon: "github", href: "https://github.com/MahdiRazzaghi808" },
    { id: 4, title: 'لیندکدین', icon: "linkedin", href: "https://www.linkedin.com/in/mahdi-razzaghi-961965244" },
]

const ContactMe = () => {
    return (
        <div id='contact-me' className={styles.contactMe}>
            <h2>ارتباط با من</h2>


            <div className={styles.iconWrapper}>
                {
                    contentDetails.map(item => <IconContent key={item.id} data={item} />)
                }

            </div>
        </div>
    )
}

export default ContactMe
