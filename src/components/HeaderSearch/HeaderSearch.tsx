import React from 'react';
import styles from "./HeaderSearch.module.scss";
import {ReactComponent as SearchIcon} from "../../assets/images/svg/search.svg";

type Props = {
    placeholder?: string
}
const HeaderSearch = ({placeholder}: Props) => {
    return (
        <label className={styles.searchLabel}>
            <input
                className={styles.search}
                type='text'
                placeholder={placeholder}
            />
            <span className={styles.searchIcon}>
                        <SearchIcon/>
                    </span>
        </label>
    );
};

export default HeaderSearch;