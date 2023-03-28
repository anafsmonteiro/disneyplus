import studio from './lista'

import './studios.css'

function Studios (){
    return (
        <section className='studios'>
   {studio.map(studio => (
       <img src={studio.imagem} alt='studio' className='studio' key='studio.Id'/>
       ))}
   </section>
    )
}

export default Studios