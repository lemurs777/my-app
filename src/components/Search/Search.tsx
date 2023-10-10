import React, { useRef, useState } from 'react'
import styles from './Search.module.scss'
import { ReactComponent as SearchIcon } from '../../assets/images/svg/header-search.svg'
import clsx from 'clsx'
const Search = () => {
	const [isFocus, setIsFocus] = useState(false)
	const [closeSearch, setCloseSearch] = useState(false)
	const searchRef = useRef(null)

	return (
		<>
			{!closeSearch && (
				<div
					className={styles.search}
					onClick={e => {
						setCloseSearch(true)
					}}
				>
					<div className={styles.search__inner}>
						<div
							className={clsx(
								styles.search__item,
								isFocus ? styles.isFocus : null
							)}
							ref={searchRef}
						>
							<input
								type='text'
								placeholder='Поиск по акциям'
								onFocus={() => setIsFocus(true)}
								onBlur={() => setIsFocus(false)}
							/>
							<button className={styles.search__btn} type='submit'>
								<SearchIcon />
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Search
