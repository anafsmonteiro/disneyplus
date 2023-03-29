import './menu.css'
import Footer from "../Footer"
import { Link } from 'react-router-dom'
function Menu(){
    return(
        <section className='menu-caixa'>   
        <div className="menu">
            <section className='perfis'>
                <Link to='/'></Link>
                <img src="./assets/perfil.jpg" alt="perfil1"/>
                <img src="./assets/perfil2.jpg" alt="perfil2"/>
            </section>
            <section className='button-section'>
            <button>Editar Perfis</button>
            </section>
            <section className='lista-caixa'>
            <ul className='lista-itens'>
                <li className='itens'>Minha Lista</li>
                <li className='itens'>Configurações do aplicativo</li>
                <li className='itens'>Conta</li>
                <li className='itens'>Avisos legais</li>
                <li className='itens'>Ajuda</li>
                <li className='itens'>Sair</li>
            </ul>
            </section>
        </div>
        <Footer/>
        </section>
    )
}
export default Menu