import {useState} from 'react'
import clsx from 'clsx'

import {CategoryListData} from './types'

import styles from './CategoryList.module.scss'

function CategoryList({data}: { data: CategoryListData }) {
    const [active, setActive] = useState(0)
    return (
        <div className={styles.categoryList}>
            <ul className={styles.list}>
                {data.map((category, index) => (
                    <li key={index} className={styles.item}>
                        <button
                            onClick={() => setActive(index)}
                            className={clsx(
                                styles.itemBtn,
                                active === index ? styles.itemBtnActive : null
                            )}
                        >
                            {category.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryList
