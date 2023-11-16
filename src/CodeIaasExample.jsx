import React from 'react';
import styles from './CodeIaasExample.module.css';

const CodeIaasExample = () => {
    const codeString = `
# zuerst einen Ubuntu herunterladen/starten
# updaten und upgraden
sudo apt update
sudo apt upgrade
# auf dem Ubuntu cowsay installieren
sudo apt install cowsay
# nginx oder apache installieren
sudo apt install nginx/apache
# git clonen
git clone <project>
# default nginx index file löschen
sudo rm /var/www/html/*
# index und css kopieren
sudo cp -r ~/uek210/* /var/www/html/
# Ip von der Instanz herausfinden und in browser eingeben
# done
  `;

    return (
        <div className={styles.iaasExample}>
            <h2 className={styles.title}>IaaS Beispiel</h2>
            <pre className={styles.codeBlock}>
                <code>
                  {codeString}
                </code>
            </pre>
        </div>
    );
};

export default CodeIaasExample;
