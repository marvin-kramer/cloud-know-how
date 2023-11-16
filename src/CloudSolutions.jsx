import React from 'react';
import styles from './CloudSolutions.module.css'; // Import CSS module

const CloudSolutions = () => {
    return (
        <div className={styles.cloudSolutions}>
            <h2 id={"solutions"} className={styles.title}>Cloud Solutions</h2>
            <div className={styles.services}>
                <div className={styles.service}>
                    <h3>IaaS</h3>
                    <p>AWS EC2, Azure</p>
                </div>
                <div className={styles.service}>
                    <h3>PaaS</h3>
                    <p>Render, Vercel</p>
                </div>
                <div className={styles.service}>
                    <h3>SaaS</h3>
                    <p>Office 365, Google Workspace
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CloudSolutions;
