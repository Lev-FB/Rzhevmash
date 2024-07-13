import './HeroDescription.css'
interface Props {
    greenTitle:string,
    mainTitle:string,
    description:string
}

const HeroDescription = ({greenTitle,mainTitle,description}:Props)=>{
    return <div className='heroDescWrapper'>
        <h3 className='heroTilte'><span className='heroGreenTilte'>{greenTitle}</span> {mainTitle}</h3>
        <p>{description}</p>
    </div>
}
export default HeroDescription