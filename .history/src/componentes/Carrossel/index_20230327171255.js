import { useState, useEffect, useRef } from 'react'
import React from 'react'
import { motion } from 'framer-motion'

import './carrossel.css'

 function Carrossel({title,galeria,descricao}) {
    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])
  

  return (
    
  )
}

export default Carrossel