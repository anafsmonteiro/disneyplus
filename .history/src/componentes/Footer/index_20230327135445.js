import icons from './footer.json'
function Footer(){
    return(
        <footer className='rodape'>
            {
                icons.map(icon =>(
                    <img src='icon.imagem'/>
                ))
            }
      </footer>
    )
}

export default Footer