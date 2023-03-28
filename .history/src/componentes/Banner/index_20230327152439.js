import './banner.css'
import { motion } from 'framer-motion'
import img from './lista.json'

function Banner() {
    return (
            <motion.section className='carrossel' whileTap={{cursor:"grabbing"}} />
            <motion.section className='inner' drag="x"/>
            {
                img.map(banner =>(
                    <motion.section key='img'>
                    <img src={banner.imagem} alt='img' className='banner-img' />
                    </motion.section>
                ))
            }
    )
}
export default Banner
