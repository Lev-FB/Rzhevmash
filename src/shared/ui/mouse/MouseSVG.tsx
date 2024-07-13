import {useStore} from "../../lib";
interface Props {
    color:string
}
const MouseSVG =({color}:Props)=> {
    return <div style={{position: 'fixed', zIndex: 4}}>
        <svg width="19" height="29" viewBox="0 0 19 29" fill="none">
            <rect x="0.5" y="0.5" width="18" height="27.2432" rx="9" stroke={color}/>
            <rect x="9.3716" y="6.29055" width="0.256757" height="4.36486" rx="0.128378"
                  stroke={useStore().anchorLinkColor}
                  strokeWidth="0.36757"/>
        </svg>
    </div>
}
export default MouseSVG