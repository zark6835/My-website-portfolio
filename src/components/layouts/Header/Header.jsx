import './header-style.scss'

const Header = (props) => {
    return ( 
        <header className="header">
            <nav className='container'>
                <h1 className='header__logo'>Myroslav</h1>
                <ul className='header__list'>
                    <li className='header__list-item' onClick={props.function} id='hello'>Hello</li>
                    <li className='header__list-item' onClick={props.function} id='about'>About me</li>
                    <li className='header__list-item' onClick={props.function} id='projects'>Projects</li>
                    <li className='header__list-item' onClick={props.function} id='contact'>Contact me</li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;