import { CyberSportList, CyberSportTables } from '../';

import styles from './CyberSport.module.scss';

function CyberSport() {

    return (
    <section className={styles.cyberSport}>

        <CyberSportList />

        <CyberSportTables />

    </section>
    );
}

export default CyberSport;
