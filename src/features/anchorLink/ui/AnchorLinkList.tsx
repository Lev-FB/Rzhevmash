import AnchorLink from "./AnchorLink.tsx";
import './AnchorLinkList.css'
import { CSSProperties } from "react";
import { observer } from "mobx-react-lite";
import {useStore} from "../../../shared/lib";
interface Props {
    linkStyle?: CSSProperties,
    lineStyle?: CSSProperties
}

const AnchorLinkList = observer(({  linkStyle, lineStyle }: Props) => {
    const store = useStore()
    const data2 = [
        'Компания' ,
         'Кто мы',
      'Преимущества'
    ];
    return (
        <div className='anchorLinksWrapper'>
            {data2.map((el,index) => (
                <AnchorLink
                    key={el}
                    style={linkStyle}
                    lineStyle={lineStyle}
                    active={index ===store.currentSlide}
                    title={el}
                />
            ))}
        </div>
    );
});

export default AnchorLinkList;