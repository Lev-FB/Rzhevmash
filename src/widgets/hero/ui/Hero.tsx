import './Hero.css'
import {Block, Button, MouseSVG} from "../../../shared/ui";
import {ActiveLinkCard} from "../../../features/activeLink";
import {AnchorLinkList} from './../../../features/anchorLink'
import {HeroDescription} from "../../../entities/hero";
import {useLocation} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../shared/lib";

interface Props {
    mainTitle:string,
    greenTitle:string,
    mainDescriptionTitle:string,
    mainGreenDescriptionTitle:string,
    description:string
}
const Hero =observer( ({mainTitle,greenTitle,mainDescriptionTitle,mainGreenDescriptionTitle,description}:Props)=>{
    const data = [
        {title:'Пара слов о нашей компании',path:'/'},
        {title:'Мусоросортировочная станция',path: '/wasteSorting'},
        {title:'Мусороперегрузочная станция',path: '/garbageTransfer'}
    ]
    const store =  useStore()
    const location  =useLocation()
    return <>
        <Block style={{borderLeft:'none'}}/>
        <Block style={{display:'flex',justifyContent:'center',alignItems:'flex-end'}} >
            <h1 className='HeroMainTitle'><span style={{color: '#22B24C'}}>{greenTitle}</span>{mainTitle}</h1>
        </Block>
        <Block className='activeLinks' >
            {data.map((el,i)=>{
                return   <ActiveLinkCard index={i+1} key={i} active={el.path===location.pathname} path={el.path}  description={el.title}/>
            })}
        </Block>
        <Block style={{borderRight:'none'}}/>
        <Block  style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',borderLeft:'none',borderBottom:'none'}}>
            <AnchorLinkList />
        </Block>
        <Block style={{display:'flex',justifyContent:'center',alignItems:'center',borderBottom:'none'}}>
            <HeroDescription mainTitle={mainDescriptionTitle} greenTitle={mainGreenDescriptionTitle} description={description}/>
        </Block>
        <Block style={{display:'flex',justifyContent:'center',alignItems:'center',borderBottom:'none'}}>
            <Button onClick={()=>console.log(1)}/>
        </Block>
        <Block style={{display: 'flex', justifyContent: 'center', alignItems: 'center',borderBottom:'none',borderRight:'none'}}>
            <MouseSVG color={store.anchorLinkColor}/>
        </Block>
    </>
})

export default Hero