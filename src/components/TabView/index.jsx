import MusicView from "../views/MusicView";
import MovieView from "../views/MovieView";
import SuperStar from "../views/StarView";
import TeleplayView from "../views/TeleplayView";
import VarietyView from "../views/VarietyView";
import './index.scss'
import { useState, useMemo } from "react";


const list = [
    {label: '电影篇', value: 'movie', component: () => MovieView},
    {label: '剧集篇', value: 'teleplay', component: () => TeleplayView},
    {label: '综艺篇', value: 'variety', component: () => VarietyView},
    {label: '音乐篇', value: 'music', component: () => MusicView},
    {label: '明星篇', value: 'superStar', component: () => SuperStar},
]

const TabView = (props) => {
    const [currentKey, setCurrentKey] = useState(3);

    const Component = useMemo(() => list[currentKey].component(), [currentKey]);

    const handleClick = (key) => {
        window.scrollTo(0, 0);
        setCurrentKey(key)
    }

    return <div className='tab-view'>
        <div className='tab-wrapper'>
            {list.map((item, index) => <div onClick={() => handleClick(index)} className={`${item.value}${index == currentKey ? ' active' : ''}`} key={item.value}>{item.label}</div>)}
        </div>
        <Component></Component>
    </div>
}

export default TabView;