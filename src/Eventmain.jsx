import React from 'react';

// import { Container } from './styles';

function Eventmain(props) {
    console.log(props)
  return (
      <>
      <div className='d-flex w-90 ' style={{borderBottom:'1px solid gray',marginTop:'80px'}}>
      <h1 >Events</h1>
      </div>
      
{props.events?
props.events.map((data)=>{
    return(
        <div className='d-flex w-100 m-3'>
           
            <img src={data.thumbnail} alt='' />
        </div>
    )
})
:

''}
      </>
  )
}

export default Eventmain;