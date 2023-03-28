import studio from './studios.json'

import './studios.css'

function Studios() {
    return (
        <section className='studios'>
            {studio.map(studio => (
                <img src={studio.imagem} alt='studio' className='studio' />
            ))}
        </section>
    )
}

export default Studios