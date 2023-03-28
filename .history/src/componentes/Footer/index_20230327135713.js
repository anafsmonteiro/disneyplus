import icons from './footer.json'
import ''
function Footer(){
    return(
        <footer className='rodape'>
            {
                icons.map(icon =>(
                    <img src={icon.imagem} alt='icones' className='icons'/>
                ))
            }
      </footer>
    )
}

export default Footer