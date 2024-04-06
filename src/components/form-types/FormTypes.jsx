import React from "react";
import { formTypeImage } from "../../config/formType";
import styles from "./formTypes.module.css";

export default function FormTypes({ formRef, handleFormType }) {
    return (
        <div className={styles.formTypes} ref={formRef}>
            {formTypeImage.map((type, index) => (
                <div key={index} className={styles.option}>
                    <h3>{type.name}</h3>
                    <div className={styles.images}>
                        {type.images.map((image, index) => (
                            <img
                                alt="images"
                                key={index}
                                src={`assets/images/${image}`}
                                className={styles.sampleImg}
                            />
                        ))}
                    </div>

                    <div
                        className={styles.select}
                        onClick={() => {
                            handleFormType(type.name);
                        }}
                    >
                        Select
                        <img
                            src="assets\icons\electric icon.webp"
                            alt="spark"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
