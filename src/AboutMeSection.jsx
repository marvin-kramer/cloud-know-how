import React from 'react';
import styles from './AboutMeSection.module.css'; // Import CSS module

const AboutMeSection = () => {
    return (
        <div className={styles.aboutMe}>
            <h2 id={"about-me"}>About Me</h2>
            <p>
                Hallo! Ich bin ein leidenschaftlicher Lernender auf einer Reise, um die Feinheiten der Public Cloud-Technologien zu verstehen. Derzeit erkunde ich die Grundlagen von Cloud-Diensten wie AWS, Azure und Google Cloud und bin gespannt darauf, meinen Lernfortschritt und Erkenntnisse auf dem Weg zu teilen.
            </p>
        </div>
    );
};

export default AboutMeSection;
