import studio from './lista'

import './studios.css'

function Studios (){
    return (
        <section className='studios'>
   {studio.map(imagem => (
       <img src={imagem.imagem} alt='studio' className='studio' key=''/>
       ))}
    {/* <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/> */}
   </section>
    )
}

export default Studios