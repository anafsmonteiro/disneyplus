import './banner.css'
import { motion } from 'framer-motion'
// import { useState, useEffect, useRef } from 'react'
import img from './lista.json'

function Banner() {
    // const carousel = useRef();

    // useEffect(()=>{
       
    // },[])
    return (
        <section className='banner'>
            <motion.div ref='carousel' className='carousel' whileTap={{ cursor: "grabbing" }} />
            <motion.div className='inner' drag="x" >
            {
                img.map(banner => (
                    <motion.div key={img}>
                        <img src={banner.imagem} alt='img' className='banner-img' />
                    </motion.div>
                ))
            }
            </motion.div>
        </section>
    )
}
export default Banner
