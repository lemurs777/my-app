import React from 'react'
import styles from './ButtonAccent.module.scss'
import clsx from 'clsx'

interface IButtonProps {
	className?: string
	title: string
	handleClick?:()=>void
}
const ButtonAccent = ({ className, title,handleClick }: IButtonProps) => {
	return (
		<button onClick={handleClick} type='button' className={clsx(styles.button, className)}>
			{title}
		</button>
	)
}

export default ButtonAccent
