import { useState } from 'react'
import {studios} from './lista'

import './studios.css'

function Studios (){
    return (
        <section className='studios'>
   {studios.map(imagem => (
       <img src={studios.map} alt='studio' className='studio'/>
       ))}
    {/* <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/> */}
   </section>
    )
}

export default Studios