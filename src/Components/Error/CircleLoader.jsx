import { CircularProgress } from '@mui/material'
import React, { useState } from 'react'

const CircleLoader = () => {

    const [circleColor,setCircleColor] = useState('red')
    const [loading,setLoading] = useState(true)

    let diffColor = ['yellow','green','blue','red']

    let colorChange = setInterval(() => {

        let newColor = diffColor[Math.floor(Math.random() * diffColor.length)]

        if(loading){
            setCircleColor(newColor)
        }
    },800)

    setTimeout(() => {
        clearInterval(colorChange)
        setLoading(false)
    }, 8000);

  return (
    <><CircularProgress sx={{color: circleColor}}/></>
  )
}

export default CircleLoader