import './header.css'
import logo from '../../../public/assets/logoplus.png'

function Header() {
    return (
        <section>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        </section>
    )
}

export default Header