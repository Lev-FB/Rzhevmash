import './Title.css'
interface Props {
    title:string,
    greenTitle:string,
    i:number,
    classNames?:{
        index?:string,
        title?:string,
        greenTitle?:string
    }

}

const Title = ({greenTitle='',title,i,classNames = {}}:Props)=>{
    const indexClass = classNames?.index?classNames.index+' titleIndex':'titleIndex'
    const titleClass = classNames?.title?classNames.title+' titleBlack':'titleBlack'
    const greenTitleClass = classNames?.greenTitle?classNames.greenTitle+' titleGreen':'titleGreen'
    return <>
        <h2 className={indexClass}>0{i + 1}</h2>
        <p className={titleClass} >
            {title}
            <span className={greenTitleClass}>{greenTitle}</span>
        </p>
    </>
}
export default Title