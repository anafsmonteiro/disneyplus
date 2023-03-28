import img from './sessao.json'
function Sessao (){
    return(
        <section className='novidades'>
        
    <span className='titulo-sessao'>Novidades no Disney+</span>

    {
        img.map(banners => (
            <img src={banners.imagem} alt='banners' className='imagem-sessao'/>
        ))
    }
   </section>
    )
}

export default Sessao