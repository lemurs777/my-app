import clsx from 'clsx'

import styles from './TableFormFilter.module.scss'
import Select, { components } from 'react-select'
import { DropdownIndicatorProps } from 'react-select/dist/declarations/src/components/indicators'

import { ReactComponent as CaretDownIcon } from '../../assets/images/svg/triangle.svg'

const DropdownIndicator: React.FC<DropdownIndicatorProps> = props => {
	return (
		<components.DropdownIndicator {...props}>
			<CaretDownIcon />
		</components.DropdownIndicator>
	)
}
function TableFormFilter() {
	const options = [
		{ value: '1', label: '1' },
		{ value: '2', label: '2' },
		{ value: '3', label: '3' },
	]
	return (
		<>
			<h2 className={styles.title}>Форма</h2>
			<div className={styles.wrapper}>
				<div className={styles.filterWrapper}>
					<button className={clsx(styles.filterBtn, styles.filterBtnActive)}>
						Все игры
					</button>
					<button className={styles.filterBtn}>Домашние игры</button>
					<button className={styles.filterBtn}>Матчи на выезде</button>
				</div>

				<div className={styles.selectWrapper}>
					Раунд
					<div className={styles.selectDesktop}>
						<Select
							components={{ DropdownIndicator }}
							classNamePrefix='selectR'
							options={options}
							defaultValue={{ value: '1', label: '1' }}
						/>
					</div>
				</div>
			</div>
			<div className={styles.selectMobile}>
				<button
					type='button'
					className={clsx(
						styles.selectMobile__arrowPrev,
						styles.selectMobile__arrow
					)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='12'
						height='15'
						viewBox='0 0 12 15'
						fill='none'
					>
						<path
							d='M10.7402 1.33281L1.26023 7.69441L10.7402 14.1328'
							stroke='#898989'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</button>
				<div className={styles.selectWrapper}>
					Раунд
					<Select
						components={{ DropdownIndicator }}
						classNamePrefix='selectR'
						options={options}
						defaultValue={{ value: '1', label: '1' }}
					/>
				</div>
				<button
					type='button'
					className={clsx(
						styles.selectMobile__arrowNext,
						styles.selectMobile__arrow
					)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='12'
						height='15'
						viewBox='0 0 12 15'
						fill='none'
					>
						<path
							d='M1.25977 1.33281L10.7398 7.69441L1.25977 14.1328'
							stroke='#898989'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</button>
			</div>
			<div className={styles.bottomWrapper}>
				<div className={styles.text}>Количество матчей</div>
				<button className={clsx(styles.btn, styles.btnActive)}>2</button>
				<button className={styles.btn}>4</button>
				<button className={styles.btn}>5</button>
			</div>
		</>
	)
}

export default TableFormFilter
