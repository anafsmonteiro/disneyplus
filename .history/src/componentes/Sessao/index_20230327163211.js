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
            <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }} >
                <motion.div
                    className='inner'
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    >

                    {
                        img.map(cartaz => (
                            <motion.div classname='img' key={img.map(banners => (
                                <img src={cartaz.imagem} alt='banners' className='imagem-sessao' />
                            </motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>
            {
                
                ))
            }
        </section>
    )
}

export default Sessao