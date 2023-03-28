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
            <img src=''https://i.pinimg.com/originals/37/41/8e/37418ed5cfbf87dc52b34a38631e5baa.jpg alt='perfil' className='perfil' />
      </footer>
    )
}

export default Footer