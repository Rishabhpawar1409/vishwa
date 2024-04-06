import React from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import styles from "./form.module.css";

export default function FormRender({ formData }) {
    const handleSubmit = ({ formData }) => {
        alert("Form Submitted");
        console.log("Submitted form data:", formData);
    };
    return (
        <div className={styles.formRender}>
            Welcome to Dynamic Form!
            <Form
                schema={formData.schema}
                validator={validator}
                className={styles.form}
                uiSchema={formData.uiSchema}
                onSubmit={handleSubmit}
                showErrorList={false}
            />
        </div>
    );
}
