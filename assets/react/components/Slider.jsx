import React from 'react'

const Slider = () => {
  return (
    <Slider 
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
    />
  )
}
export default Slider