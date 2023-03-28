import './banner.css'
import { motion } from 'framer-motion'
import img from './lista.json'

function Banner() {
    return (
        <section className='banner'>
            
            <motion.section className='carrossel' />
            <motion.section className='inner' />
        </section>
    )
}
export default Banner
