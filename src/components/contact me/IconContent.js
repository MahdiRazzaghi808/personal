import React from 'react'
import styles from "./iconContent.module.css"

import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const IconContent = ({ data }) => {
    return (
        <div className={styles.iconWrapper}>
            <div className={styles.iconContent}>
                <a href={data.href} className={styles.icon}>
                    {data.icon === "telegram" ? <FaTelegramPlane /> : ""}
                    {data.icon === "instagram" ? <FaInstagram /> : ""}
                    {data.icon === "github" ? <FaGithub /> : ""}
                    {data.icon === "linkedin" ? <FaLinkedinIn /> : ""}
                </a>
                <p className={styles.title}>{data.title}</p>
            </div>
        </div>
    )
}

export default IconContent
