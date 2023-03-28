import './banner.css'
import { motion } from 'framer-motion'
import img from './lista.json'

function Banner() {
    return (
        <section className='banner'>
            <motion.section className='carrossel' />
            <motion.section className='inner' />
            {
                img.map(banner =>(
                    <motion.section></motion.section>
                    <img src={banner.imagem} alt='img' className='banner-img' />
                ))
            }
        </section>
    )
}
export default Banner
