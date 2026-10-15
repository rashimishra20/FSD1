import React from 'react'

const Card = (props) => {
  return (
    <div style={{border: '2px solid red', height:'400px', width:'300px',backgroundColor:'white'}}>
       <h3>Student Record</h3>
       <h3>{props.name}</h3> 
       <img src={props.image} alt='' height={'100px'} width={'100px'}/>
       <h3>Roll No: {props.roll}</h3>
       <h4> Class {props.class} </h4>

    </div>
  )
}

export default Card