import React, {useState} from 'react'
import CustomDropdown from '../CustomDropdown'
import styles from './DropdownFind.module.scss'
import clsx from "clsx";
//@ts-ignore
const DropdownFind = ({data}) => {
    const [inputs, setInputs] = useState('')
    const [select, setSelect] = useState(data[0])
    return (
        <CustomDropdown title={select} >
                    <li className={styles.selectSearch}>
                        <div className={styles.search}>
                            <input
                                data-input={'input'}
                                type='text'
                                className={clsx(styles.searchInput)}
                                placeholder={'Поиск'}
                                value={inputs}
                                onChange={e => setInputs(e.target.value)}
                            />
                        </div>
                    </li>
                    <li className={styles.selectSearchChoose}>
                        <div className={styles.select__item}>{select}</div>
                    </li>

                    {
                        data
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
                            })
                    }


        </CustomDropdown>
    )
}

export default DropdownFind
