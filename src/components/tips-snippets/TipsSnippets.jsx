import React, { useState } from "react";
import styles from "./tipsSnippets.module.css";
import { tipsSnippets } from "../../config/tipsSnippets";
import classNames from "classnames";

export default function TipsSnippets() {
    const [dropdownData, setDropdownData] = useState(tipsSnippets);
    const [hide, setHide] = useState(false);
    const handleDropdown = (el) => {
        setDropdownData(
            dropdownData.map((item) => {
                if (item.name === el.name) {
                    return { ...item, showItems: !item.showItems };
                } else {
                    return { ...item };
                }
            })
        );
    };
    return (
        <div className={styles.tipsSnippets}>
            <div
                className={classNames(
                    styles.dropdownContainer,
                    hide && styles.hide
                )}
            >
                <p className={styles.heading}>Tips / Snippets / Validations</p>
                <div className={styles.menu}>
                    {dropdownData.map((el, index) => (
                        <div key={index}>
                            <div
                                className={styles.menuItems}
                                onClick={() => {
                                    handleDropdown(el);
                                }}
                            >
                                <p>{el.name}</p>
                                <img
                                    src="assets\icons\chevron.svg"
                                    alt="dropdown"
                                />
                            </div>
                            <div className={styles.dropdown}>
                                {el.showItems &&
                                    el.menu.map((menuItem, index) => (
                                        <p
                                            className={styles.children}
                                            key={index}
                                        >
                                            {menuItem.item}
                                        </p>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className={styles.close}
                onClick={() => {
                    setHide(!hide);
                }}
            >
                <img
                    className={classNames(
                        styles.closeIcon,
                        hide && styles.flip
                    )}
                    src="assets\icons\chevron.svg"
                    alt="toggle"
                />
            </div>
        </div>
    );
}
