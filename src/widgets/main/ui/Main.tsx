import './Main.css';
import {Block, Button} from "../../../shared/ui";
import {Description, MainCard, Title} from "../../../entities/main";

const Main = () => {
    const cardInfo = ['Полный цикл разработки','Индивидуальные проекты','42 Объекта']
    return (
        <div className='main'>
            <div className='overlay'></div>
            <div className='mainWrapper'>
                <Block  style={{border:'none'}}/>
                <Block className='block border' style={{borderTop:'none',borderBottom:'none',borderRight:'none',display:'flex',alignItems:'flex-end',}}>
                    <div className='mainInfoWrapper' >
                        <Title/>
                        <Description/>
                        <Button style={{borderColor:'black',color:'black'}} onClick={()=>console.log(1)}/>
                    </div>
                </Block>
                <Block className='border borderBottomNone borderRightNone' style={{borderTop:'none'}}/>
                <Block className='border borderBottomNone' style={{borderTop:'none'}}/>
                <Block className='border outBlock' />
                <Block className='border outBlock' />
                {
                    cardInfo.map((el,i)=>{
                        const className = i===2?'border borderBottomNone':'border borderBottomNone borderRightNone'
                        return <MainCard el={el} i={i} className={className}/>
                    })
                }
                <Block className='border outBlock' />
                <Block className='border outBlock'/>
                <Block className='border borderBottomNone borderRightNone' />
                <Block className='border borderBottomNone borderRightNone' />
                <Block className='border borderBottomNone' />
                <Block  style={{border:'none'}}/>
            </div>
        </div>
    );
};

export default Main;