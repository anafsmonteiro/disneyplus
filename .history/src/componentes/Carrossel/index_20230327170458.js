import { useState, useEffect, useRef } from 'react'
import React from 'react'
import { motion } from 'framer-motion'

import './carrossel.css'

 function Carrossel({title,galeria,seila}) {
    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])
  

  return (
    <div className='caixa'>
        <div className='texto'>
          <p>{title}</p>
        </div>
        <div className='app'>
                <motion.div ref={carousel} className='carrocel' whileTap={{cursor: "grabbing"}}>
                    <motion.div className='inner' 
                        drag="x" 
                        dragConstraints={{right: 0, left: -width}}
                        >

                        {galeria.map(item => {
                        return(

                            <motion.div className={seila} key={item}>
                            <img src={item.urlImg} alt="imagem" />
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