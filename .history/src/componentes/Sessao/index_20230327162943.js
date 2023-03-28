import img from './sessao.json'
import {use}
import './sessao.css'

function Sessao({title}) {
    return (
        <section className='container'>
            <div>
                <p className='titulo-sessao'>{title}</p>
            </div>

            {
                img.map(banners => (
                    <img src={banners.imagem} alt='banners' className='imagem-sessao' />
                ))
            }
        </section>
    )
}

export default Sessao