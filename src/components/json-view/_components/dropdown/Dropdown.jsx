import classNames from "classnames";
import React from "react";
import { dropdownOptions } from "../../../../config/samepleData";
import styles from "./dropdown.module.css";

export default function Dropdown({
    setDropdownData,
    setIsDropdownClose,
    isDropdownClose,
    dropdownData,
    setFormData,
}) {
    const handleDropdown = (option) => {
        setDropdownData({
            name: option.name,
            schema: JSON.stringify(option.schema),
            uiSchema: option.uiSchema,
        });
        setFormData({
            schema: JSON.stringify(option.schema),
            uiSchema: option.uiSchema,
        });
        setIsDropdownClose(true);
    };
    return (
        <div className={styles.dropdown}>
            <p
                className={styles.name}
                onClick={() => {
                    setIsDropdownClose(!isDropdownClose);
                }}
            >
                {dropdownData.name}
                <img src="assets\icons\chevron.svg" alt="dropdown" />
            </p>
            {!isDropdownClose && (
                <div className={styles.options}>
                    {dropdownOptions.map((option, index) => (
                        <p
                            key={index}
                            onClick={() => {
                                handleDropdown(option);
                            }}
                            className={classNames(
                                styles.option,
                                dropdownData === option.name &&
                                    styles.selectedOption
                            )}
                        >
                            {option.name}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}
