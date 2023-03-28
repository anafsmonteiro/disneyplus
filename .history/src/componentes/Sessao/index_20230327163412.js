import img from './sessao.json'
import { useState, UseEfect, useRef } from 'react'
import './sessao.css'
import { motion } from 'framer-motion'

function Sessao({ title }) {
    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])
    return (
        <section className='container'>
            <div>
                <p className='titulo-sessao'>{title}</p>
                <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }} >
                    <motion.div
                        className='inner'
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                    >

                        {
                            img.map(cartaz => (
                                <motion.div classname='img' key={img}>
                                    <img src={cartaz.imagem} alt='img' className='banner-img' />
                                </motion.div>
                            ))
                        }
                    </motion.div>
                </motion.div>
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