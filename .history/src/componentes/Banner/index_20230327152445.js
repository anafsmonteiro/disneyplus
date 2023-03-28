import './banner.css'
import { motion } from 'framer-motion'
import img from './lista.json'

function Banner() {
    return (
            <motion.div className='carrossel' whileTap={{cursor:"grabbing"}} />
            <motion.div className='inner' drag="x"/>
            {
                img.map(banner =>(
                    <motion.div key='img'>
                    <img src={banner.imagem} alt='img' className='banner-img' />
                    </motion.div>
                ))
            }
    )
}
export default Banner
