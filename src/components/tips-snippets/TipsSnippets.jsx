import classNames from "classnames";
import React, { useState } from "react";
import { tipsSnippets } from "../../config/tipsSnippets";
import styles from "./tipsSnippets.module.css";

export default function TipsSnippets() {
    const [dropdownData, setDropdownData] = useState(tipsSnippets);
    const [hide, setHide] = useState(false);
    const [showTooltip, setShowTolltip] = useState(false);
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
    const handleToolTip = (checker) => {
        if (checker.item === showTooltip.name) {
            setShowTolltip({ name: "", flag: false });
        } else {
            setShowTolltip({ name: checker.item, flag: true });
        }
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
                                        <div
                                            className={styles.children}
                                            key={index}
                                        >
                                            <p>{menuItem.item}</p>
                                            <img
                                                onClick={() => {
                                                    handleToolTip(menuItem);
                                                }}
                                                src="assets\icons\tooltip.svg"
                                                alt="tooltip"
                                            />
                                            {showTooltip.name ===
                                                menuItem.item && (
                                                <p className={styles.tooltip}>
                                                    {menuItem.value}
                                                </p>
                                            )}
                                        </div>
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
