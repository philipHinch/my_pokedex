//images
import mainTitle from '../assets/images/main_title.png'

const Header = () => {
    return (
        <header className='headerContainer'>
            <img src={mainTitle} className='mainTitleImage' alt="pokemon title image" />
        </header>
    );
}

export default Header;