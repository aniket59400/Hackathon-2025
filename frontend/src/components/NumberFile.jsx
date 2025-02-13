import React from 'react'
import FourNumber from './FourNumber'
import {io} from 'socket.io-client'

function NumberFile() {

  const [otp, setOtp] = React.useState('000000000000')

  const socket = io("http://localhost:5000/");

  socket.on("connection", (sock) => {
    console.log(sock.id)
    // sock.on('Number', (number) => {
    //   console.log(number);
    //   setOtp(number)
    // })
  })

  socket.on('Number', (data) => {
    console.log("Received OTP:", data.number);
    setOtp(data.number);
  });

  return (
    <div className='bg-black w-full h-full flex items-center justify-center'>
      <div className='w-10/12 h-full flex items-center justify-center' >

        <FourNumber otp = {otp.slice(0, 4)} index = '1'/>
        
        <FourNumber otp = {otp.slice(4, 8)} index = '2'/>
        <FourNumber otp = {otp.slice(8)} index = '3'/>

      </div>
    </div>
  )
}

export default NumberFile
