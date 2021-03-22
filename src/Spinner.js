import React from 'react'
import ReactDom from 'react-dom'

const Spinner=(props)=>
{
  return (
      <div className="ui active dimmer">
        <div className="ui big text loader">
           {props.message}
        </div>
      </div>
  )
}
export default Spinner;