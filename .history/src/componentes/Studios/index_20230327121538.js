import {studios} from './lista'

import './studios.css'

function Studios (){
    return (
        <section className='studios'>
   {studios.map(imagem => (
       <img src={studios.imagem} alt='studio' className='studio'/>
       ))}
    {/* <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/> */}
   </section>
    )
}

export default Studios