import React from 'react'
import FormDesign from './FormDesign'

export default function DisplayFormDesign(props) {
  let {formvalue}=props
  return (
    <div>
        <FormDesign formvalue={formvalue}/>
    </div>
  )
}
