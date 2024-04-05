import React, { useEffect, useRef, useState } from "react";
import FormTypes from "../form-types/FormTypes";
import Hero from "../hero-section/Hero";
import JsonView from "../json-view/JsonView";
import styles from "./main.module.css";
import { useNavigate } from "react-router-dom";

export default function Main({ setFormData }) {
    const navigate = useNavigate();
    const [showFormTypes, setShowFormTypes] = useState(false);
    const formRef = useRef(null);

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
        if (type === "Upload") {
            setFormData({
                title: "Files",
                type: "object",
                properties: {
                    file: {
                        type: "string",
                        format: "data-url",
                        title: "Single file",
                    },
                    files: {
                        type: "array",
                        title: "Multiple files",
                        items: {
                            type: "string",
                            format: "data-url",
                        },
                    },
                },
            });
            navigate("/form");
        }
    };
    return (
        <div className={styles.main}>
            <Hero renderFormTypes={renderFormTypes} />
            {showFormTypes && (
                <FormTypes formRef={formRef} handleFormType={handleFormType} />
            )}
            <JsonView setFormData={setFormData} />
        </div>
    );
}
