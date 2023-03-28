import {studios} from './lista'
use
import './studios.css'

function Studios (){
    return (
        <section className='studios'>
   {studios.map(imagem => (
       <img src={studio} alt='studio' className='studio'/>
       ))}
    {/* <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/> */}
   </section>
    )
}

export default Studios