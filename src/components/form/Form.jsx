import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import React from "react";
import styles from "./form.module.css";

export default function FormRender({ formData }) {
    const handleSubmit = ({ formData }) => {
        alert("Form Submitted");
        console.log("Submitted form data:", formData);
    };
    const onError = (errors) =>
        console.log("I have", errors.length, "errors to fix");
    return (
        <div className={styles.formRender}>
            <img src="assets\images\banner.avif" alt="banner" />
            <p className={styles.heading}>Welcome to Dynamic Form!</p>
            <Form
                schema={formData.schema}
                validator={validator}
                className={styles.form}
                uiSchema={formData.uiSchema}
                onSubmit={handleSubmit}
                showErrorList={false}
                liveValidate
                onError={onError}
            />
        </div>
    );
}
