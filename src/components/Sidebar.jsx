import React from 'react'

function Sidebar({close}) {
  return (
   
    <div className='w-[75%] fixed flex flex-col  z-20 top-0 left-0 h-screen  ' onClick={close}>
        <div className="w-full bg-green-400 h-[80px]"></div>
         <div className="w-full bg-green-200  overflow-y-auto">
            <div className="h-screen"></div>
         </div>
         <div className="w-full bg-green-400 h-[130px]"></div>
    </div>
    
  )
}

export default Sidebar
