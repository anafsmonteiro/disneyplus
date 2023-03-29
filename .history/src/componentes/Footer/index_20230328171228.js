import icons from './footer.json'
import './footer.css'

function Footer(){
    return(
        <footer className='rodape'>
            {
                icons.map(icon =>(
                    <img src={icon.imagem} alt='icones' className='icones'/>
                ))
            }
            <Link
            <img src='./assets/perfil.jpg' alt='perfil' className='perfil'/>

      </footer>
    )
}

export default Footer