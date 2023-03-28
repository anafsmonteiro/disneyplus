import icons from './footer.json'
import Menu from '../Menu'
import './footer.css'
import { useState } from 'react'



function Footer(){
    const [ancora,setAncora]=useState(null)
    
    const mostrarMenu = (event)=>{
        setAncora(event.currentTarget)
    }
    const fecharMenu = () =>{
        setAncora(null)
    }

    return(
        <footer className='rodape'>
            {
                icons.map(icon =>(
                    <img src={icon.imagem} alt='icones' className='icones'/>
                ))
            }
            onClick=
            <img src='./assets/perfil.jpg' alt='perfil' className='perfil' onClick={mostrarMenu}
            />
            <Menu />

      </footer>
    )
}

export default Footer