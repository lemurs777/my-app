import { BestMoments, SportList, SportTables } from '../'

import styles from './Sport.module.scss';

function Sport() {

    return (
    <section className={styles.sport}>

        <SportList />

        <BestMoments />

        <SportTables />

    </section>
    );
}

export default Sport;
