import {Block, Logo} from "../../../shared/ui";
import Nav from "./Nav.tsx";
import Menu from "./Menu.tsx";

const Header = ()=>{
    return <>
        <Logo/>
        <Nav/>
        <Block style={{borderTop:'none'}}/>
        <Menu/>
    </>
}
export default Header