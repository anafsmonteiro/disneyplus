import './footer.css'
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <footer className='rodape'>
            <Link to='/'>
            <img src='./assets/home.svg' alt='perfil' className='icones'/>
            </Link>
            <Link to=''
            <img src='./assets/search.svg' alt='perfil' className='icones'/>
            <Link to='/download'>
            <img src='./assets/download.svg' alt='perfil' className='icones'/>
            </Link>
            <Link to='/menu'>
            <img src='./assets/perfil.jpg' alt='perfil' className='perfil'/>
            </Link>

      </footer>
    )
}

export default Footer