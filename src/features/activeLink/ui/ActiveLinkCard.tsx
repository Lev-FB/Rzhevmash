import './ActiveLinkCard.css'
import {Link} from "react-router-dom";

interface Props {
    index:number,
    description:string,
    active:boolean,
    path:string,
}
const ActiveLinkCard = ({index,description,active,path}:Props)=> {
    return <div className='activeLinkWrapper'>
        <h2 className={`linkTitle${active ? 'On' : 'Off'}`}>0{index}</h2>
        <Link to={path}>
            <p className={`description${active ? 'On' : 'Off' }`}>{description}</p>
        </Link>
    </div>
}

export default ActiveLinkCard