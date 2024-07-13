
import './Button.css'
import {CSSProperties} from "react";
interface Props {
    onClick:()=>void,
    style?:CSSProperties
}
const Button = ({onClick,style={}}:Props)=>{
    return <button style={style} className='button' onClick={onClick}>
        Узнать Подробнее
        <div className='buttonArrow'>
            <svg width="7" height="15" viewBox="0 0 7 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.857544 14.2381L6.19088 7.38096L0.857543 0.523813" stroke="#FBFBFB" stroke-width="0.761905" stroke-linecap="round"/>
            </svg>
        </div>
    </button>
}

export default Button