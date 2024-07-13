import './AnchorLink.css';
import { CSSProperties } from 'react';
import { useStore } from '../../../shared/lib';
import { observer } from 'mobx-react-lite';

interface Props {
    title: string;
    active: boolean;
    lineStyle?: CSSProperties;
    style?: CSSProperties;
}

const AnchorLink = observer(({ title, active, style, lineStyle }: Props) => {
    const store = useStore();
    return (
        <div className='anchorLinkWrapper' >
            <div
                style={{...lineStyle,backgroundColor:store.anchorLinkColor}}
                className={`anchorLine${active ? 'On' : 'Off'}`}
            ></div>
            <p
                style={{...style,color:store.anchorLinkColor}}
                className={`anchorLink${active ? 'On' : 'Off'}`}
                >
                {title}
            </p>
        </div>
    );
});

export default AnchorLink;