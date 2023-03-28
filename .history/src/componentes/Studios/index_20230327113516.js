import {studio} from './lista.json'
import './studios.css'

function Studios (){
    return (
        <section className='studios'>
   {studio.map(studios => (
    
    ))} alt='studio' className='studio'/>
    {/* <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/> */}
   </section>
    )
}

export default Studios