import React from "react";
import styles from "./hero.module.css";

export default function Hero({ renderFormTypes }) {
    return (
        <div className={styles.hero}>
            <h2>Create your Own Dynamic Forms</h2>
            <button
                className={styles.heroBtn}
                onClick={() => {
                    renderFormTypes();
                }}
            >
                Create form
                <img src="assets\icons\arrow-up-long.png" alt="arrow-up-long" />
            </button>
        </div>
    );
}
