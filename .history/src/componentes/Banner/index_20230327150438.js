import './banner.css'
import { motion } from 'framer-motion'
import img from './'
const images = [{img.map}]
function Banner() {
    return (
        <section className='banner'>
            <img src={img} alt='img' className='banner-img' />
            <motion.section className='carrossel' />
            <motion.section className='inner' />
        </section>
    )
}
export default Banner
