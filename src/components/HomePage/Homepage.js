import React from 'react'
import './Homepage.css'

const barCodeImage = require('../../assets/image-qr-code.png')

const Homepage = () => {
  return (
    <div className='container-fluid p-5 home-page'>
      <div className='bg-white container text-center
      image-text-container my-auto p-4'>
        <div className='bar-code-image'>
          <img src={barCodeImage} alt='bar-code' />
        </div>

        <div className='mt-3'>
          <div>
            <h3>Improve your front-end skills by building projects</h3>
          </div>

          <div className='mt-3'>
            <p>Scan the QR code to visit Frontend Mentor and take
              take your coding skills to the next level
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage