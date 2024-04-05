import React from "react";
import styles from "./formTypes.module.css";

export default function FormTypes({ formRef, handleFormType }) {
    const formTypes = ["URL", "Upload", "JSON"];
    return (
        <div className={styles.formTypes} ref={formRef}>
            {formTypes.map((type, index) => (
                <div key={index} className={styles.option}>
                    <h3>{type}</h3>
                    <button
                        onClick={() => {
                            handleFormType(type);
                        }}
                    >
                        Select
                        <img
                            src="assets\icons\electric icon.webp"
                            alt="spark"
                        />
                    </button>
                </div>
            ))}
        </div>
    );
}
