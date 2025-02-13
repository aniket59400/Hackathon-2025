import React, { useState } from 'react';
import OtpInput from 'react-otp-input';


function FourNumber() {
  const [otp, setOtp] = useState();
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='flex items-center justify-center w-1/3 '>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span>_</span>}
          renderInput={(props) => <input {...props} className='w-full ' readOnly/>}
          
        />
      </div>
    </div>
  )
}

export default FourNumber;
