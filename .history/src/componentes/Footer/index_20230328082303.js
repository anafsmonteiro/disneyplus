import icons from './footer.json'
import Menu from '../Menu'
useState
import './footer.css'
import { useState } from 'react'

function Footer(){

    


    return(
        <footer className='rodape'>
            {
                icons.map(icon =>(
                    <img src={icon.imagem} alt='icones' className='icones'/>
                ))
            }
            <img src='./assets/perfil.jpg' alt='perfil' className='perfil' onClick={mostrarOpcao()}/>
      </footer>
    )
}

export default Footer