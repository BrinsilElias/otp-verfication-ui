import React from 'react'
import { Link } from 'react-router-dom';
import utilStyle from '../utils.module.css';

function Home() {
  return (
    <div className='App'>
        <div>
            <p className={utilStyle.headinglg}>Welcome</p>
            <Link to="/">
                <button type='button' className={utilStyle.btn + ' ' + utilStyle.btn_cancel}>Back</button>
            </Link>
        </div>
    </div>
  )
}

export default Home