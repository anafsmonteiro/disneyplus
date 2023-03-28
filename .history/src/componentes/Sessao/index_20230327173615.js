import rever from './rever.json'
import novidades from ''

import { useState, useEffect, useRef } from 'react'
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

                <motion.div ref={carousel} className='carrossel' whileTap={{ cursor: "grabbing" }} >
                    <motion.div
                        className='inner'
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                    >

                        {


                            rever.map(cartaz => (
                                <motion.div classname='img' key={rever}>
                                    <img src={cartaz.imagem} alt='img' className='imagem-sessao' />
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
