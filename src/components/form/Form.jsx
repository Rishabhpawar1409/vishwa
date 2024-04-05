import React from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import styles from "./form.module.css";

export default function FormRender({ formData }) {
    return (
        <div className={styles.formRender}>
            Welcome to Dynamic Form!
            <Form
                schema={formData}
                validator={validator}
                className={styles.form}
            />
        </div>
    );
}
