import React, {useState} from 'react';
import styles from "../HeaderComnonents/HeaderBreadCrumb/HeaderBreadCrumb.module.scss";
import clsx from "clsx";

// @ts-ignore
const CustomDropdown = ({title, children}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.select}>
      <button className={clsx(styles.select__btn, isOpen ? styles.select__btnActive : null)}
              onClick={() => {
                setIsOpen(!isOpen)
              }}>{title}
      </button>
      {isOpen && (
        <div className={clsx(styles.select__content, styles.select__contentCountry)}>
          {children}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;