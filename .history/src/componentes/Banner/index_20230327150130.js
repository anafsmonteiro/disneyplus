import './banner.css'
import { motion } from 'framer-motion'
import img from '../../img/mandalorian.jpeg'
// const images = [{img.map}]
function Banner() {
    return (
        <section className='banner'>
            <img src={img} alt='img' className='banner-img' />
            <motion.img animate={{x:200,y:0}}
        </section>
    )
}
export default Banner