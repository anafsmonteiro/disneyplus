import icons from './footer.json'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <footer className='rodape'>
            <Link to='/'>
            <img src='./assets/home.svg' alt='perfil' className='icons'/>
            </Link>
            <img src='./assets/perfil.jpg' alt='perfil' className='icons'/>
            <img src='./assets/perfil.jpg' alt='perfil' className='perfil'/>
            <Link to='/menu'>
            <img src='./assets/perfil.jpg' alt='perfil' className='perfil'/>
            </Link>

      </footer>
    )
}

export default Footer