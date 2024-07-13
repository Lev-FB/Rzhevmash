import {Block} from "../../../shared/ui";
import './MainCard.css'
interface Props {
    el:string,
    i:number,
    className:string
}

const MainCard = ({el,i,className}:Props)=>{
    return<Block  style={{display:'flex',justifyContent:'center',alignItems:'center'}} className={className+' ' + 'mainCard'}>
        <div className='mainCardInfoWrapper'>
            <h2 className='mainCardTitle' >0{i+1}</h2>
            <p  className='mainCardDescription' >{el}</p>
        </div>
    </Block>
}
export default MainCard