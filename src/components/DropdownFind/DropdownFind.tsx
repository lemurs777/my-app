import React, { useState } from 'react'
import CustomDropdown from '../CustomDropdown'
import styles from './DropdownFind.module.scss'
//@ts-ignore
const DropdownFind = ({ data }) => {
	const [inputs, setInputs] = useState('')
	const [select, setSelect] = useState(data[0])
	return (
		<CustomDropdown title={data[0]}>
			<li className={styles.selectSearch}>
				<div className={styles.search}>
					<input
						type='text'
						className={styles.searchInput}
						placeholder={'Поиск'}
						value={inputs}
						onChange={e => setInputs(e.target.value)}
					/>
				</div>
			</li>
			<li className={styles.selectSearchChoose}>
				<div className={styles.select__item}>{select}</div>
			</li>

			{data
				.filter((i: any) => i.toLowerCase().includes(inputs.toLowerCase()))
				.map((item: any) => {
					return (
						<li
							className={styles.select__item}
							onClick={() => {
								setSelect(item)
							}}
						>
							<div className={styles.select__name}>{item}</div>
						</li>
					)
				})}
		</CustomDropdown>
	)
}

export default DropdownFind
