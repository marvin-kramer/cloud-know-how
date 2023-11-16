import React from 'react';
import styles from './AboutMeSection.module.css'; // Import CSS module

const AboutMeSection = () => {
    return (
        <div className={styles.aboutMe}>
            <h2 id={"about-me"}>About Me</h2>
            <p>
                Hi there! I'm a passionate learner on a journey to understand the intricacies of Public Cloud technologies. Currently, I'm exploring the fundamentals of cloud services like AWS, Azure, and Google Cloud, and I'm eager to share my learning progress and insights along the way.
            </p>
        </div>
    );
};

export default AboutMeSection;
