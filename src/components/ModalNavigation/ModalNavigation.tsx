import { ModalType } from './types';

import { Link } from 'react-router-dom';

import arrLinks from '../../data/dataSiteMap';

import styles from './ModalNavigation.module.scss';

function ModalNavigation(props: ModalType) {

	const links = arrLinks;

	return (
		<div className={styles.modalNavigation}>
			<h2 className={styles.title}>Навигация</h2>
			<ul className={styles.list}>
				{links.map((item, index) => (
				<li key={index} className={styles.item}>
					{ (item.param) ? 
						(
							<Link 
								to={item.link}
								state = {{ numRequest: item.param }}
								className={styles.link} onClick={props.toggleModal}>
									{item.name}
							</Link>
						) : (
							<Link to={item.link} className={styles.link} onClick={props.toggleModal}>{item.name}</Link>
						)                
					}
				</li>
				))}
			</ul>
		</div>
	);
}

export default ModalNavigation;
