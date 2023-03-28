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
            <img src='https://i.pinimg.com/originals/f2/d5/19/f2d5199bccc1d38c6a02c5f4ea060590.jpg' alt='perfil'
      </footer>
    )
}

export default Footer