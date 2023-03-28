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
            <img src='https://i1.wp.com/temalguemassistindo.com.br/wp-content/uploads/2019/01/mulan-janeiro-netflix.jpg?fit=1920%2C1080&ssl=1' alt='perfil' className='perfil' />
      </footer>
    )
}

export default Footer