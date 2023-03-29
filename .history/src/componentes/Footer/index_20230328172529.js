import home from './assets/home.svg'
import search from './assets/search.svg'
import download from './assets/dowload.svg'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <footer className='rodape'>
            <Link to='/menu'>
            <img src={home} alt='perfil' className='perfil'/>
            </Link>
            <Link to='/menu'>
            <img src={search} alt='perfil' className='perfil'/>
            </Link>
            <Link to='/menu'>
            <img src='./assets/download.svg' alt='perfil' className='perfil'/>
            </Link>
            <Link to='/menu'>
            <img src='./assets/perfil.jpg' alt='perfil' className='perfil'/>
            </Link>

      </footer>
    )
}

export default Footer