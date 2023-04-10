import React from 'react'
import styles from './project.module.css'
import { technologyIcon } from '../../../helper/technology'
const Project = ({ data }) => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.image}>
                <img src={data.image} alt="project" />
            </div>

            <div className={styles.detail}>
                <h3 className={styles.title}>{data.title}</h3>
                <div className={styles.technology}>
                    {
                        data.technologies.map((item, index) => <img key={index} src={`${technologyIcon(item)}`} alt="technology" />)
                    }
                </div>
                <div className={styles.line}></div>
                <div className={styles.explain}><span>توضیحات : </span> {data.explain}</div>
                <a href={data.link} className={styles.see} style={{ pointerEvents: data.active === "deActive" && "none",backgroundColor:data.active === "deActive" && "#f92b52" }}>{data.active === "active" ? "مشاهده پروژه" : "به زودی..."}</a>
            </div>
        </div>
    )
}

export default Project
