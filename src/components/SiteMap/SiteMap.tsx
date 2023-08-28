import { Link } from 'react-router-dom';

import arrLinks from '../../data/dataSiteMap';

import styles from './SiteMap.module.scss';

function SiteMap() {

	const links = arrLinks;

	return (
		<ul className={styles.sitemap}>
            {links.map((item, index) => (
            <li key={index} className={styles.item}>
                { (item.param) ? 
                    (
                        <Link 
                            to={item.link}
                            state = {{ numRequest: item.param }}
                            className={styles.link}>
                                {item.name}
                        </Link>
                    ) : (
                        <Link to={item.link} className={styles.link}>{item.name}</Link>
                    )                
                }
            </li>
            ))}
		</ul>
	);
}

export default SiteMap;