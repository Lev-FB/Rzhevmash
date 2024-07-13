import React from "react";
import './HeroWrapper.css'
interface Props {
    children:React.ReactNode,
    style?:React.CSSProperties
}
const HeroWrapper = ({children,style}:Props)=>{
    return <div style={style} className='wrapper' >
        {children}
    </div>

}

export default HeroWrapper