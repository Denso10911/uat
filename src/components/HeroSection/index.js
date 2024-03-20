import React from "react"
import s from "./HeroSection.module.scss"

const HeroSection = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.titleWrapper}>
                    <div className={s.title}>
                        <h1>The Ultimate Payment Solutions.<br/> Soon in the UAE!</h1>
                        <p>Don't Miss Your Chance to Experience Cutting-Edge Payment Solutions.</p>
                    </div>
                </div>
                <div className={s.background}>
                    <img src="/images/background.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
