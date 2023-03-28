studios = [
    {
        img
    }
]

import studio from '../../img/studios/disney.png'
import './studios.css'

function Studios (){
    return (
        <section className='studios'>
    <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/>
   </section>
    )
}

export default Studios