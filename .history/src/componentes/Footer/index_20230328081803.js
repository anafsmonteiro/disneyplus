import icons from './footer.json'
import Menu from '../Menu'
import './footer.css'

function Footer(){

    function mostrarOpcao(){
        <Menu />
    }
    return(
        <footer className='rodape'>
            {
                icons.map(icon =>(
                    <img src={icon.imagem} alt='icones' className='icones'/>
                ))
            }
            <img src='./assets/perfil.jpg' alt='perfil' className='perfil' onClick={}/>
      </footer>
    )
}

export default Footer