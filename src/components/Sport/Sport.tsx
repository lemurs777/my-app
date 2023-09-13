import { BestMoments, SportList, SportTables } from '../'
import SportFooter from '../SportFooter'

import styles from './Sport.module.scss'

function Sport() {

    return (
        <section className={styles.sport}>

            <SportList />

            <BestMoments />

            <SportTables />
            <SportFooter />
        </section>
    )
}

export default Sport
