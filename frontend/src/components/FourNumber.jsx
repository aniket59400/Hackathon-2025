import React, { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';


function FourNumber(props) {
  const [otp, setOtp] = useState(props.otp);
  console.log(`props.otp: ${props.index}`, props.otp);
  useEffect(() => {
    setOtp(props.otp);
  }, {otp})
  return (
    <div className="w-full h-screen flex items-center justify-center">
  <div className="flex flex-col items-center justify-center w-auto p-8 rounded-2xl bg-indigo-600 shadow-2xl shadow-indigo-500/40">
    <h2 className="text-white text-xl font-semibold mb-4"></h2>
    <OtpInput
      value={otp}
      // onChange={setOtp}
      numInputs={4}
      renderSeparator={<span className="mx-2 text-white text-2xl"></span>}
      renderInput={(props) => (
        <input
          {...props}
          className="min-w-12 h-14 text-center text-white text-xl font-bold border-2 border-indigo-400 bg-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 shadow-md transition-all duration-200"
        />
      )}
    />
  </div>
</div>

  )
}

export default FourNumber;
