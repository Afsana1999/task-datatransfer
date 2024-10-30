import React from 'react'

function SendBtn({submited}) {
  return (
    <div>
        <button className='send' type={submited}>Gonder</button>
    </div>
  )
}

export default SendBtn