import { useState, useEffect, useRef } from 'react'
import React from 'react'
import { motion } from 'framer-motion'

import './carrossel.css'

 function Carrossel({galeria,descricao}) {
    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])
  

  return (
  
        <div className='app'>
                <motion.div ref={carousel} className='carrocel' whileTap={{cursor: "grabbing"}}>
                    <motion.div className='inner' 
                        drag="x" 
                        dragConstraints={{right: 0, left: -width}}
                        >

                        {galeria.map(image => {
                        return(

                            <motion.div className={descricao} key={image}>
                            <img src={image.urlImg} alt="imagem" />
                            </motion.div>
                        ) 
                        })}
                    </motion.div>
                </motion.div>
        </div>
    </div>
  )
}

export default Carrossel