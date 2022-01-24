import React,{useState} from 'react';
import './login.css'
// import { Container } from './styles';

function Input() {
    const[number,setNumber]=useState();
    const[state,setState]=useState(false);
    const[otp,setotp]=useState();
    const[otpval,setotpval]=useState('');
    const[numberValue,setnumberValue]=useState('');
    


    function loginNumber(e){
        // e.previentDefault();
       
        setNumber(e.target.value)
        setnumberValue(e.target.value)

    }
    function submit(){
     var numData=numberValue.split('') 
     if(numData.length===10){
        setNumber('')
        setotp(numberValue.slice(3,8))
         setState(true)

     }else{
        setState(false)
         alert('enter a valid number')
     }

    }

    function goProfile(){
        if(otp===otpval){
            console.log('login');
            window.location.href='/profile'
        }else{
            alert('enter valid otp')
        }
    }

    function loginOtp(e){
        setotpval(e.target.value)
    }

  return (
      <>
      {state?
       <div className='login'>
       <p>Enter OTP :<span style={{color:'red'}}>{otp}</span> number</p>
       <input type="number" value={otpval} onChange={(e)=>{loginOtp(e)}} className='input rounded-pill' />
       <button className='loginButton rounded-pill' onClick={()=>{goProfile()}}>Login</button>
     </div>
    :
    <div className='login'>
          <p>Enter mobile number</p>
          <input type="number" value={number} onChange={(e)=>{loginNumber(e)}} className='input rounded-pill' />
          <button className='loginButton rounded-pill' onClick={()=>{submit()}}>Submit</button>
      </div>
    }
     
      </>
  )
}

export default Input;