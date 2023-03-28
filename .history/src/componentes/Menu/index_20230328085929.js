import './menu.css'

function Menu(){
    return(
        <div className="menu">
            <section className='perfis'>
                <img src="./assets/perfil.jpg" alt="perfil1"/>
                <img src="./assets/perfil.jpg" alt="perfil1"/>
            </section>
            
            <button>Editar Perfis</button>
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
    )
}
export default Menu