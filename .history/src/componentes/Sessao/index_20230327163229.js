import img from './sessao.json'
import { useState, UseEfect, useRef } from 'react'
import './sessao.css'
import { MotionConfig } from 'framer-motion'

function Sessao({title}) {
    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])
    return (
        <section className='container'>
            <div>
                <p className='titulo-sessao'>{title}</p>
            </div>
            
        </section>
    )
}

export default Sessao
{
    img.map(banners => (
        <img src={banners.imagem} alt='banners' className='imagem-sessao' />
    ))
}