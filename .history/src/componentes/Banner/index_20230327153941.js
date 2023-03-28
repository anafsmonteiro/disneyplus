import './banner.css'
import { motion } from 'framer-motion'
import img from './lista.json'

function Banner() {
    return (
        <section className='banner'>
            <motion.div className='carousel' whileTap={{ cursor: "grabbing" }} />
            <motion.div className='inner' drag="x" >
            {
                img.map(banner => (
                    <motion.div key='img'>
                        <img src={banner.imagem} alt='img' className='banner-img' />
                    </motion.div>
                ))
            }
            
        </section>
    )
}
export default Banner
