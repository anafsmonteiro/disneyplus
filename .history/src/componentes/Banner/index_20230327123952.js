import './banner.css'
import img from '../assets/mandalorian.jpeg'
function Banner() {
    return (
        <section className='banner'>
            <img src={img} alt='img' className='banner-img' />
        </section>
    )
}
export default Banner