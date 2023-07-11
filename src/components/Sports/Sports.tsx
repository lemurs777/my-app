import { BestMoments, SportList, SportTables } from '../'

import styles from './Sports.module.scss';

function Sports() {

    return (
    <section className={styles.sports}>

        <SportList />

        <BestMoments />

        <SportTables />

    </section>
    );
}

export default Sports;
