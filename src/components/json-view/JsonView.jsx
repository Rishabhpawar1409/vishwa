import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import Dropdown from "./_components/dropdown/Dropdown";
import styles from "./jsonView.module.css";

export default function JsonView({ setFormData, textAreaRef }) {
    const navigate = useNavigate();
    const [isDropdownClose, setIsDropdownClose] = useState(true);
    const [dropdownData, setDropdownData] = useState({
        name: "Examples",
        schema: "",
        uiSchema: "",
    });
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState("");
    const handleSubmit = () => {
        if (input.schema !== "") {
            try {
                const parsedSchema = JSON.parse(input.schema);
                setFormData({
                    schema: parsedSchema,
                    uiSchema: input.uiSchema,
                });
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                    navigate("/form");
                }, 3000);
            } catch (error) {
                alert("Invalid JSON input! take inspiration from Examples.");
            }
            setInput({ schema: "", uiSchema: "" });
        }
    };

    useEffect(() => {
        setInput({
            schema: dropdownData.schema,
            uiSchema: dropdownData.uiSchema,
        });
    }, [dropdownData]);

    return (
        <div className={styles.jsonView} ref={textAreaRef}>
            <div className={styles.panel}>
                <div className={styles.panelHeader}>
                    <p className={styles.heading}>JSON Form Editor</p>
                    <div className={styles.dropdownAndBtn}>
                        <Dropdown
                            isDropdownClose={isDropdownClose}
                            dropdownData={dropdownData}
                            setDropdownData={setDropdownData}
                            setIsDropdownClose={setIsDropdownClose}
                            setFormData={setFormData}
                        />
                        <div
                            className={styles.submitBtn}
                            onClick={() => {
                                handleSubmit();
                            }}
                        >
                            {loading ? <BeatLoader /> : "Submit"}
                        </div>
                    </div>
                </div>
                <div className={styles.editor}>
                    <textarea
                        placeholder="Write JSON data only!"
                        value={input.schema}
                        onChange={(e) => {
                            setInput({ schema: e.target.value, uiSchema: "" });
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
