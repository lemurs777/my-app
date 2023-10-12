import React from 'react'
import styles from './ButtonAccent.module.scss'
import clsx from 'clsx'

interface IButtonProps {
	className?: string
	title: string
}
const ButtonAccent = ({ className, title }: IButtonProps) => {
	return (
		<button type='button' className={clsx(styles.button, className)}>
			{title}
		</button>
	)
}

export default ButtonAccent
