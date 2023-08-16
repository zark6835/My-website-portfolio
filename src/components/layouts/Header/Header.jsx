import './header-style.scss'

const Header = () => {
    return ( 
        <header className="header">
            <nav className='container'>
                <h1 className='header__logo'>Myroslav</h1>
                <ul className='header__list'>
                    <li className='header__list-item'>Hello</li>
                    <li className='header__list-item'>About me</li>
                    <li className='header__list-item'>Projects</li>
                    <li className='header__list-item'>Feedback</li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;