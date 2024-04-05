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
    const textAreaRef = useRef(null);

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
                schema: {
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
                },
                uiSchema: {
                    file: {
                        "ui:options": {
                            accept: [".png", ".pdf", ".webp"],
                        },
                    },
                },
            });
            navigate("/form");
        }

        if (type === "JSON") {
            textAreaRef.current &&
                textAreaRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className={styles.main}>
            <Hero renderFormTypes={renderFormTypes} />
            {showFormTypes && (
                <FormTypes formRef={formRef} handleFormType={handleFormType} />
            )}
            <JsonView setFormData={setFormData} textAreaRef={textAreaRef} />
        </div>
    );
}
