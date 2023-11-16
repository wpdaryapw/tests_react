import { forwardRef } from 'react'
import s from './Input.module.css'



const Input = forwardRef((props, ref) => {
    return (
        <input {...props} ref={ref} className={s.inp_elem}/>
    )
})

export default Input