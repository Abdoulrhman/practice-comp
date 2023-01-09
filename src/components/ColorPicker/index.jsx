import React, { useEffect, useState } from 'react'
import './styles.css'
function ColorPicker() {

    const [selectedColor, setSelectedColor]= useState("")
    const handleSelectedColor =(color)=>{
        setSelectedColor(color)
    }
    useEffect(()=>{
console.log(selectedColor)
    },[selectedColor])
  return (
 
    <div className='wrapper'>
        <div className='colors'>
            <div className='red common' onClick={()=>handleSelectedColor("red")}>Red</div>
            <div className='blue common'  onClick={()=>handleSelectedColor("blue")}>Blue</div>
            <div className='green common'  onClick={()=>handleSelectedColor("green")}>Green</div>
        </div>
        <div className='coloredBox' style={{backgroundColor:selectedColor}}>
           <p style={{color:selectedColor}}>choose background color from above</p> 
        </div>
    </div>
  )
}

export default ColorPicker