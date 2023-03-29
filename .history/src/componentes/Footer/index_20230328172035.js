import icons from './footer.json'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <footer className='rodape'>
            <Link to='/menu'>
            <img src='./assets/.jpg' alt='perfil' className='perfil'/>
            </Link>
            <Link to='/menu'>
            <img src='./assets/perfil.jpg' alt='perfil' className='perfil'/>
            </Link>
            <Link to='/menu'>
            <img src='./assets/perfil.jpg' alt='perfil' className='perfil'/>
            </Link>
            <Link to='/menu'>
            <img src='./assets/perfil.jpg' alt='perfil' className='perfil'/>
            </Link>

      </footer>
    )
}

export default Footer