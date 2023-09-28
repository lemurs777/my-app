import React from 'react';
import clsx from "clsx";
import styles from "../HeaderBottom/HeaderBottom.module.scss";

const Language = () => {
  return (
    <div>
      <button className={clsx(styles.selectLanguage, styles.ru)}>RU</button>
    </div>
  );
};

export default Language;