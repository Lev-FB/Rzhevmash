import React from "react";
import './Block.css'
interface Props {
    style?:React.CSSProperties
    children?:React.ReactNode
    className?:string
}

const Block =({style,children,className=''}:Props)=>{
    if(!children){
        return <div className={"block"+' ' +className} style={style}></div>
    }
    return <div className={"block"+' ' +className} style={style}>{children}</div>
}

export default Block