import img from './sessao.json'
function Sessao({}) {
    return (
        <section className='container'>
            <div>
                <p className='titulo-sessao'>{titulo}</p>
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