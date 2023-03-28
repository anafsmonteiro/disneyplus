import img from './sessao.json'
function Sessao (){
    return(
        <section className='novidades'>
<div>
    <p className='titulo-sessao'>Novidades no Disney+</p>
</div>

    {
        img.map(banners => (
            <img src={banners.imagem} alt='banners' className='imagem-sessao'/>
        ))
    }
   </section>
    )
}

export default Sessao