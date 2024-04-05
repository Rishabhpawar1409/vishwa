import React from "react";
import styles from "./formTypes.module.css";

export default function FormTypes({ formRef, handleFormType }) {
    const formTypes = [
        { name: "URL", images: ["signUp.png"] },
        { name: "Upload", images: ["upload.png"] },
        { name: "JSON", images: ["sampleJsonImg.png", "signUp.png"] },
    ];
    return (
        <div className={styles.formTypes} ref={formRef}>
            {formTypes.map((type, index) => (
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
