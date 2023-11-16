import React from 'react';
import styles from './CloudFeatures.module.css'; // Import CSS module

const CloudFeatures = () => {
    return (
        <div className={styles.cloudFeatures}>
            <h2 className={styles.title}>Merkmale des Cloud Computing</h2>
            <ul className={styles.featuresList}>
                <li className={styles.feature}>
                    <h3>On Demand (self-service)</h3>
                    <p>Steht sofort zur Verfügung und man kann die benutzten Sachen einfach bearbeiten.</p>
                </li>
                <li className={styles.feature}>
                    <h3>Broad network access</h3>
                    <p>Man hat von überall auf den Service Zugriff. Verbergt eine angeschlossene Cloud/Pool/Cluster, sodass nicht ersichtlich ist, wie viele Nodes es hat. Beim Eingangspunkt des Clusters/Cloud gibt es einen LoadBalancer.</p>
                </li>
                <li className={styles.feature}>
                    <h3>Resource pooling</h3>
                    <p>Rechner werden geteilt → lohnt sich, wenn viele Server zur Verfügung stehen (Economics of Scale).</p>
                </li>
                <li className={styles.feature}>
                    <h3>Rapid elasticity</h3>
                    <p>Ressourcen können bei hoher Auslastung automatisch erweitert werden.</p>
                </li>
                <li className={styles.feature}>
                    <h3>Measured service</h3>
                    <p>Der effektive Verbrauch wird abgerechnet.</p>
                </li>
            </ul>
        </div>
    );
};

export default CloudFeatures;
