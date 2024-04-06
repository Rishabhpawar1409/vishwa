import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formType } from "../../config/formType";
import FormTypes from "../form-types/FormTypes";
import Hero from "../hero-section/Hero";
import JsonView from "../json-view/JsonView";
import TipsSnippets from "../tips-snippets/TipsSnippets";
import styles from "./main.module.css";

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
        if (type === "JSON") {
            textAreaRef.current &&
                textAreaRef.current.scrollIntoView({ behavior: "smooth" });
        } else {
            setFormData(formType[type]);
            navigate("/form");
        }
    };
    return (
        <div className={styles.main}>
            <Hero renderFormTypes={renderFormTypes} />
            {showFormTypes && (
                <FormTypes formRef={formRef} handleFormType={handleFormType} />
            )}
            <div className={styles.snippetsAndEditor}>
                <TipsSnippets />
                <JsonView setFormData={setFormData} textAreaRef={textAreaRef} />
            </div>
        </div>
    );
}
