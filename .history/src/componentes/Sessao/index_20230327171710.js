import img from './sessao.json'
// import { useState, useEffect, useRef } from 'react'
import './sessao.css'
// import { motion } from 'framer-motion'
import Carrossel from '../Carrossel'

function Sessao({ title }) {
    // const carousel = useRef()
    // const [width, setWidth] = useState(0)

    // useEffect(() => {
    //     setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    // }, [])
    
    return (
        <section className='container'>
            <div>
                


            <Carrossel titulo= />



                {/* <motion.div ref={carousel} className='carrossel' whileTap={{ cursor: "grabbing" }} >
                    <motion.div
                        className='inner'
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                    >

                        {
                            img.map(cartaz => (
                                <motion.div classname='img' key={img}>
                                    <img src={cartaz.imagem} alt='img' className='imagem-sessao' />
                                </motion.div>
                            ))
                        }
                    </motion.div>
                </motion.div> */}
            </div>

        </section>
    )
}

export default Sessao