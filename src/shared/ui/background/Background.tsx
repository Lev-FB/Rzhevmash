import React from "react";
import video from "./rzhevmash.mp4";
import HeroWrapper from '../../../entities/hero/ui/HeroWrapper.tsx'
import './Background.css'
interface Props {
    children:React.JSX.Element
}

const Background =  ({children}:Props)=>{
    return <HeroWrapper style={{
        height:100+'vh',
        position:'relative'
    }}>
            <video autoPlay muted loop className="bgVideo">
                <source src={video} type="video/mp4"/>
            </video>
            {
                children
            }
    </HeroWrapper>
}

export default Background