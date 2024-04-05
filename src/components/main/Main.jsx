import React, { useEffect, useRef, useState } from "react";
import FormTypes from "../form-types/FormTypes";
import Hero from "../hero-section/Hero";
import styles from "./main.module.css";

export default function Main() {
    const [showFormTypes, setShowFormTypes] = useState(false);
    const formRef = useRef(null);
    const [formType, setFormType] = useState("");

    const renderFormTypes = () => {
        setShowFormTypes(true);
        if (showFormTypes && formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    useEffect(() => {
        if (showFormTypes && formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [showFormTypes]);

    const handleFormType = (type) => {
        setFormType(type);
    };
    return (
        <div className={styles.main}>
            <Hero renderFormTypes={renderFormTypes} />
            {showFormTypes && (
                <FormTypes formRef={formRef} handleFormType={handleFormType} />
            )}
        </div>
    );
}
