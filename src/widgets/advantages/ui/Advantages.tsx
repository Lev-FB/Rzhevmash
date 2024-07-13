import './Advantages.css'
import {Block} from "../../../shared/ui";
import {AdvantagesList} from "../../../entities/advantages";
const Advantages = ()=>{
    return <div  className='advantages'>
        <Block style={{border: 'none'}} className='advantagesBlock' >
        </Block>
        <Block  className='advantagesBlock borderRightNone'>
            <div className='advantagesWrapper'>
                <h2 className='advantagesCardTile' >
                    Наши
                    <span> преимущества</span>
                </h2>
                <AdvantagesList/>
            </div>
        </Block>
        <Block className='advantagesBlock borderRightNone'/>
        <Block className='advantagesBlock borderRightNone'/>
        <Block className='advantagesBlock' />
    </div>
}

export default Advantages
