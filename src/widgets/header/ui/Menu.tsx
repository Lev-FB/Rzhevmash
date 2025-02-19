import './Menu.css'
import {Block} from "../../../shared/ui";
const Menu = ()=>{

    return <Block style={{
        display:'flex',
        justifyContent: 'center' ,
        alignItems: 'center',
        borderTop: 'none',
        borderLeft: 'none',
    }}>

        <svg width="25" height="25" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="13.5" y="0.116699" width="7.5" height="7.5" rx="1.5" transform="rotate(45 13.5 0.116699)"
                  fill="#FBFBFB"/>
            <rect x="5.54504" y="8.07166" width="7.5" height="7.5" rx="1.5" transform="rotate(45 5.54504 8.07166)"
                  fill="#FBFBFB"/>
            <rect x="21.455" y="8.07166" width="7.5" height="7.5" rx="1.5" transform="rotate(45 21.455 8.07166)"
                  fill="#FBFBFB"/>
            <rect x="13.5" y="16.0266" width="7.5" height="7.5" rx="1.5" transform="rotate(45 13.5 16.0266)"
                  fill="#FBFBFB"/>
        </svg>

    </Block>


}

export default Menu