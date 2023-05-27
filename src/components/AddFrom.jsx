import axios from 'axios';
import React, {useState} from "react"
import utilStyle from "../utils.module.css"
import { useNavigate } from 'react-router-dom';

const editInputStyle = {
    position: 'relative',
    width: '100%',
    display: 'grid',
    gap: '0.3rem',
}

const inputStyle = {
    padding: '0.4rem 0.8rem',
    borderRadius: '0.5rem',
    border: '1px solid var(--clr-border-dark)',
}

const labelStyle = {
    fontSize: '0.875rem',
    fontWeight: 'var(--fw-md)'
}


function EmailFrom({ onSubmit }) {
  const [formData, setFormData] = useState({
    email: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // If the form is valid, proceed with form submission
    console.log('Form data:', formData);
    axios.post('/api/generate-otp', formData)
        .then((response) => {
        // Handle the response from the backend if needed
        console.log('Form submission successful');
        onSubmit(); // Call the onSubmit function passed as a prop
        })
        .catch((error) => {
        // Handle any error that occurred during the submission
        console.error('Form submission failed:', error);
        });
  }
  

  return (
    <form onSubmit={handleSubmit}>
        <div style={{display: 'grid', gap: '1.125rem', width: '100%'}}>
            <div style={editInputStyle}>
                <label style={labelStyle} htmlFor="email-input">Email</label>
                <input style={inputStyle}
                       name='email' 
                       id='email-input' 
                       type="email" 
                       onChange={handleChange}
                       placeholder='johndoe@email.com'
                       value={formData.email}
                />
               
            <div style={{display: 'grid', gap: '0.8rem', gridTemplateColumns: '1fr 1fr', marginTop: '0.75rem'}} className='form-action'>
                <button type='button' className={utilStyle.btn + ' ' + utilStyle.btn_cancel}>Clear</button>
                <button type='submit' className={utilStyle.btn + ' ' + utilStyle.btn_submit}>Send</button>
            </div>
        </div>
        </div>
    </form>
  )
}

function OtpFrom() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    otp: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: parseInt(value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    // If the form is valid, proceed with form submission
    console.log('Form data:', formData);
    axios.post('/api/validate-otp', formData)
        .then((response) => {
        // Handle the response from the backend if needed
        if(response.data.isValid) {
          navigate('/home')
        }
        else {
          alert("OTP Incorrect");
        }
        console.log('Form submission successful');
        })
        .catch((error) => {
        // Handle any error that occurred during the submission
        console.error('Form submission failed:', error);
        });
  }
  

  return (
    <form onSubmit={handleSubmit}>
        <div style={{display: 'grid', gap: '1.125rem', width: '100%'}}>
            <div style={editInputStyle}>
                <label style={labelStyle} htmlFor="otp-input">Enter OTP</label>
                <input style={inputStyle}
                       name='otp' 
                       id='otp-input' 
                       type="number"
                       onChange={handleChange}
                       placeholder='******'
                       value={formData.otp}
                />
               
            <div style={{display: 'grid', gap: '0.8rem', gridTemplateColumns: '1fr 1fr', marginTop: '0.75rem'}} className='form-action'>
                <button type='button' className={utilStyle.btn + ' ' + utilStyle.btn_cancel}>Clear</button>
                <button type='submit' className={utilStyle.btn + ' ' + utilStyle.btn_submit}>Send</button>
            </div>
        </div>
        </div>
    </form>
  )
}

export {EmailFrom, OtpFrom}