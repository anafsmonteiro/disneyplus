import icons from './footer.json'
// import Menu from '../Menu'
import './footer.css'

function Footer(){

    function Menu(){
        return(
            <div>
                <section>
                    <img src="./assets/perfil.jpg" alt="perfil1"/>
                    <img src="./assets/perfil.jpg" alt="perfil1"/>
                </section>
                <button>Editar Perfis</button>
                <section>
                <ul>
                    <li>Minha Lista</li>
                    <li>Configurações do aplicativo</li>
                    <li>Conta</li>
                    <li>Avisos legais</li>
                    <li>Ajuda</li>
                    <li>Sair</li>
                </ul>
                </section>
            </div>
        )
    }

    return(
        <footer className='rodape'>
            {
                icons.map(icon =>(
                    <img src={icon.imagem} alt='icones' className='icones'/>
                ))
            }
            <img src='./assets/perfil.jpg' alt='perfil' className='perfil' onClick={Menu()}/>
      </footer>
    )
}

export default Footer