import logo '../img/logo.png'
import './header.css'

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