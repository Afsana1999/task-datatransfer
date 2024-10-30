import React, { useEffect, useState } from 'react'

function EmailInp({setemail}) {
 
  return (
    <div>
       
        <input type="email" className='name' placeholder='Emaili daxil edin...' onChange={(e)=>setemail(e.target.value)}  />
    </div>
  )
}

export default EmailInp