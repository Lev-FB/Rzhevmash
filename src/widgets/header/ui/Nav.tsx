import './Nav.css'
import {Block} from "../../../shared/ui";
const Nav = ()=> {
    const routes = [
        'О компании',
        'Продукция',
        'Решения',
        'Новости'
    ]
    return <Block style={{borderTop:'none',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <nav className='nav'>
            <ul className='navUl'>
                {routes.map(el => <li key={el} className='navLinkWrapper'>
                    <a href="#" className='navLink'>
                        {el}
                    </a>
                </li>)}
            </ul>
        </nav>
    </Block>
}

export default Nav