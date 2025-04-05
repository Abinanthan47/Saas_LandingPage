import React from 'react'
import Threads from '../../../public/Threads/Threads'

function Cta() {
  return (
    <div className='h-[400px] bg-transparent'>
           <div style={{ width: '100%', height: '300px', position: 'absolute' }}>
            <Threads amplitude={3} distance={0} enableMouseInteraction={true} />
          </div>
    </div>
  )
}

export default Cta