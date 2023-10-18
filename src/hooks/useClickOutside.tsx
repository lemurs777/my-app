import {useEffect} from "react";
// @ts-ignore
export const useClickOutside = (ref, cb) => {
// @ts-ignore
    const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) cb()
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    })
};
