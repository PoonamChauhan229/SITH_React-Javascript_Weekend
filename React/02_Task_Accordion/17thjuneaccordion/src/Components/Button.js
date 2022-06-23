import React,{useState} from 'react'

export default function Button(props) {

    return (
    <>
    <button className='button' onClick={props.collapseClick}type="submit">Collapse</button>
    <button className='button' onClick={props.expandClick}type="submit">Expand</button>
    </>
  )
}
