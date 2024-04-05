import React, { useState } from "react";
import Dropdown from "./_components/dropdown/Dropdown";
import styles from "./jsonView.module.css";

export default function JsonView() {
    const [isDropdownClose, setIsDropdownClose] = useState(true);
    const [dropdownData, setDropdownData] = useState("Examples");
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
                        />
                        <button>Submit</button>
                    </div>
                </div>
                <div className={styles.editor}></div>
            </div>
        </div>
    );
}
