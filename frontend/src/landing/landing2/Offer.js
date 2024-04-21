import React from 'react'
import '../styling/offer.css'
import {FaAmbulance, FaFileMedical, FaAccessibleIcon, FaRocket, FaLock} from 'react-icons/fa'

function Offer () {
  return(
    <div>
      <div className='section'>
        <div>
          <FaAmbulance size={100} color={'#b9b9b9'}/>
          <p>Urgent Care</p>
        </div>

        <div>
          <FaFileMedical size={100} color={'#b9b9b9'}/>
          <p>Digitalized Patient's Record</p>
        </div>

        <div>
          <FaAccessibleIcon  size={100} color={'#b9b9b9'}/>
          <p>Accessibility</p>
        </div>

        <div>
          <FaRocket size={100} color={'#b9b9b9'}/>
          <p>Efficienct</p>
        </div>

        <div>
          <FaLock size={100} color={'#b9b9b9'}/>
          <p>Patient Confidentiality</p>
        </div>
      </div>
    </div>
  )
}

export default Offer;