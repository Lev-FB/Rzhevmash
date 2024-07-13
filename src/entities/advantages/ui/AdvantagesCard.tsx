import './AdvantagesCard.css'
import {Title} from "../../../shared/ui";
import {useEffect, useState} from "react";

interface Props{
    title:string,
    greenTitle:string,
    descriptionTitle:string,
    description:string,
    img:string,
    i:number
}
const AdvantagesCard = ({title,greenTitle,descriptionTitle,description,img,i}:Props)=> {
    const [width,setWidth]= useState(1920)
    useEffect(() => {
        window.addEventListener('resize',()=>setWidth(innerWidth))
    }, []);
    return <div className='advantagesCard' style={{flexDirection:i==1?'row-reverse':'row'}}>

        <img alt={title} className='advantagesCardImg' src={img}/>
        <div className='advantagesCardInfoWrapper' >
            <div className='advantagesTitleWrapper'>
                <Title title={title} greenTitle={greenTitle} i={i}/>
            </div>
            <p className='advantagesCardText' >{descriptionTitle}</p>
            {width>1760&&<p className='advantagesCardText' >{description}</p>}
        </div>

    </div>
}
export default AdvantagesCard