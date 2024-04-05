import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import Dropdown from "./_components/dropdown/Dropdown";
import styles from "./jsonView.module.css";

export default function JsonView({ setFormData }) {
    const navigate = useNavigate();
    const [isDropdownClose, setIsDropdownClose] = useState(true);
    const [dropdownData, setDropdownData] = useState({
        name: "Examples",
        schema: "",
    });
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        setFormData(JSON.parse(input));
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/form");
        }, 3000);
    };

    useEffect(() => {
        setInput(dropdownData.schema);
    }, [dropdownData]);

    return (
        <div className={styles.jsonView}>
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
                        <button
                            onClick={() => {
                                handleSubmit();
                            }}
                        >
                            {loading ? <BeatLoader /> : "Submit"}
                        </button>
                    </div>
                </div>
                <div className={styles.editor}>
                    <textarea
                        placeholder="Write JSON data only!"
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
