import React from 'react'

export default function Alert(props) {
    const capitalize =(word)=>{
        return word.charAt(0).toUpperCase()+word.substring(1,word.length);
    }
    
  return (
    //if props.alert is true then return <div></div>
    props.alert && <div className={`alert alert-${props.alert.status} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.status)} ! </strong>{props.alert.type}
  </div>
  )
}
