import React from 'react';
import styles from './CloudAdvantagesDisadvantages.module.css'; // Import CSS module

const CloudAdvantagesDisadvantages = () => {
    return (
        <div className={styles.cloudAdvantagesDisadvantages}>
            <h2 id={"advantages-disadvantages"} className={styles.title}>Vor- und Nachteile von Cloud-Lösungen</h2>
            <div className={styles.listContainer}>
                <div className={`${styles.box} ${styles.advantage}`}>
                    <span className={styles.symbol}>+</span>
                    Bezahlung nach Verbrauch
                </div>
                <div className={`${styles.box} ${styles.advantage}`}>
                    <span className={styles.symbol}>+</span>
                    Geringe Anschaffungskosten
                </div>
                <div className={`${styles.box} ${styles.advantage}`}>
                    <span className={styles.symbol}>+</span>
                    Geringer Wartungsaufwand
                </div>
                <div className={`${styles.box} ${styles.advantage}`}>
                    <span className={styles.symbol}>+</span>
                    Weltweiter Zugang
                </div>
                <div className={`${styles.box} ${styles.advantage}`}>
                    <span className={styles.symbol}>+</span>
                    Garantierte Betriebskontinuität und Verfügbarkeit
                </div>
                <div className={`${styles.box} ${styles.advantage}`}>
                    <span className={styles.symbol}>+</span>
                    Hohe Flexibilität und Elastizität
                </div>
                <div className={`${styles.box} ${styles.advantage}`}>
                    <span className={styles.symbol}>+</span>
                    Kurze Markteinführungszeit (schneller App-Launch)
                </div>
            </div>
            <br/>
            <div className={styles.listContainer}>
                <div className={`${styles.box} ${styles.disadvantage}`}>
                    <span className={styles.symbol}>-</span>
                    Bezahlung nach Verbrauch (hohe Kosten)
                </div>
                <div className={`${styles.box} ${styles.disadvantage}`}>
                    <span className={styles.symbol}>-</span>
                    Sehr hohe Komplexität
                </div>
                <div className={`${styles.box} ${styles.disadvantage}`}>
                    <span className={styles.symbol}>-</span>
                    Weniger Kontrolle
                </div>
                <div className={`${styles.box} ${styles.disadvantage}`}>
                    <span className={styles.symbol}>-</span>
                    Datenhoheit
                </div>
                <div className={`${styles.box} ${styles.disadvantage}`}>
                    <span className={styles.symbol}>-</span>
                    Gebunden an den Anbieter
                </div>
            </div>
        </div>
    );
};

export default CloudAdvantagesDisadvantages;
