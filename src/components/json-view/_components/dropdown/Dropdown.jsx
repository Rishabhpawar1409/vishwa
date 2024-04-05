import classNames from "classnames";
import React from "react";
import styles from "./dropdown.module.css";

export default function Dropdown({
    setDropdownData,
    setIsDropdownClose,
    isDropdownClose,
    dropdownData,
}) {
    const dropdownOptions = [
        { name: "Login", data: "" },
        { name: "Signup", data: "" },
        { name: "Profile", data: "" },
    ];
    const handleDropdown = (option) => {
        setDropdownData(option.name);
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
                {dropdownData}
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
