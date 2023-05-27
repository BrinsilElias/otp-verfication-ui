import React, {useState} from 'react'
import utilStyle from '../utils.module.css';
import { EmailFrom, OtpFrom } from './AddFrom'

function FormContainer() {

  const [submitted, setSubmitted] = useState(false); // State variable to track form submission
  
  const handleFormSubmit = () => {
     setSubmitted(true); // Set submitted to true upon form submission
  };
  return (
    <div className='App'>
        <div className='form-container'>
            {!submitted ? (
            <>
              <div>
                <div className={utilStyle.add_icon}></div>
                <p className={utilStyle.headingmd}>OTP Verification</p>
                <p className={utilStyle.bodytextsmlight}>The OTP will be sent to your email</p>
              </div>
              <div className='form-body'>
                <EmailFrom onSubmit={handleFormSubmit}/>
              </div>
            </>) : (
              <>
              <div>
                <div className={utilStyle.add_icon}></div>
                <p className={utilStyle.headingmd}>OTP Verification</p>
                <p className={utilStyle.bodytextsmlight}>Enter the six digit OTP</p>
              </div>
              <div className='form-body'>
                <OtpFrom />
              </div>
            </>
            )}
        </div>
    </div>
  )
}

export default FormContainer