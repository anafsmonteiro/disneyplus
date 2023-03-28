import img from './sessao.json'
function Sessao (){
    return(
        <section className='novidades'>
    <p className='titulo-sessao'>Novidades no Disney+</p>
    <div className=''>
    {
        img.map(banners => (
            <img src={banners.imagem} alt='banners' className='imagem-sessao'/>
        ))
    }
    </div>
   </section>
    )
}

export default Sessao