import icons from './footer.json'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <footer className='rodape'>
            <Link to='/'>
            <img src={icons} alt='perfil' className='perfil'/>
            </Link>
            <img src={search} alt='perfil' className='perfil'/>
            <img src={download} alt='perfil' className='perfil'/>
            <Link to='/menu'>
            <img src='./assets/perfil.jpg' alt='perfil' className='perfil'/>
            </Link>

      </footer>
    )
}

export default Footer