import './banner.css'
import { motion } from 'framer-motion'
// import { useState, useEffect, useRef } from 'react'
import img from './lista.json'

function Banner() {
    // const carousel = useRef();
    // const [width, setWidth] = useState(0)

    // useEffect(() => {
    //     setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    // }, [])
    return (
        <section className='banner'>
            <motion.div /*ref='carousel'*/ className='carousel' whileTap={{ cursor: "grabbing" }} />
            <motion.div 
            className='inner' 
            drag="x" 
            // dragConstraints={{ right: 0, left: -width }} 
            initial={{ x: 100 }} 
            animate={{ x: 0 }} 
            transition={{ duration: 0.8 }}>

                {
                    img.map(banner => (
                        <motion.div classname='img' key={img}>
                            <img src={banner.imagem} alt='img' className='banner-img' />
                        </motion.div>
                    ))
                }
            </motion.div>
        </section>
    )
}
export default Banner
