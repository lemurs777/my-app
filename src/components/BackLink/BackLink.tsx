import React from 'react';
import {Link} from "react-router-dom";
import styles from "./BackLink.module.scss";
import {ReactComponent as ArrowIcon} from '../../assets/images/svg/arrow.svg'
const BackLink = () => {
    return (
        <Link to={'../'} className={styles.back}>
            <ArrowIcon/>
        </Link>
    );
};

export default BackLink;