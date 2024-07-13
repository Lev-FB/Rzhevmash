import { Route, Routes} from 'react-router-dom'
import {MainPage} from "../../pages/main/";
const HeroRouter = ()=>{
    return <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="wasteSorting" element={<MainPage/>} />
            <Route path="garbageTransfer" element={<MainPage/>} />
        </Routes>
}

export {HeroRouter};