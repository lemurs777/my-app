import styles from './HeaderBottom.module.scss'
import Language from '../Language'
import LiveEventTime from "../LiveEventTime";
import MobileApps from "../MobileApps";
import HeaderInfo from "../HeaderInfo";
import {ReactComponent as SearchIcon} from "../../assets/images/svg/search.svg";
import HeaderSearch from "../HeaderSearch";

const timeList = [
    '3ч', '6ч', '12ч', 'Сегодня', 'Завтра', 'Суббота', 'Воскресенье'
]

function HeaderBottom() {
    return (
        <div className={styles.headerBottom}>
            <div className={styles.content}>
                <HeaderSearch placeholder={'Найти команду, страну, лигу..'}/>
                <LiveEventTime data={timeList}/>
                <div className={styles.info}>
                    <HeaderInfo/>
                    <MobileApps/>
                    <Language/>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom
