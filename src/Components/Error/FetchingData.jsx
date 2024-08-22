import React, { useEffect, useState } from 'react'

const FetchingData = ({ fetching }) => {

    const [fdot,setFdot] = useState('white')
    const [sdot,setSdot] = useState('white')
    const [tdot,setTdot] = useState('white')

    let intervalId =
      setInterval(() => {
          if (fetching){
              if(fdot === 'white'&&sdot === 'white'&&tdot === 'white'){
                  setFdot('#a1b1be')
                  setSdot('white')
                  setTdot('white')
              }else if(fdot === '#a1b1be'&&sdot === 'white'&&tdot === 'white'){
                  setFdot('white')
                  setSdot('#a1b1be')
                  setTdot('white')
              }else if(fdot === 'white'&&sdot === '#a1b1be'&&tdot === 'white'){
                  setFdot('white')
                  setSdot('white')
                  setTdot('#a1b1be')
              }else if(fdot === 'white'&&sdot === 'white'&&tdot === '#a1b1be'){
                  setFdot('#a1b1be')
                  setSdot('white')
                  setTdot('white')
              }
          }
      }, 400)

      setTimeout(() => {
        clearInterval(intervalId)
      }, 2000)

  return (
    <>
        <div style={{ textAlign: 'center', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h1 className='FetchData' style={{ fontSize: '10vw', fontWeight: 'bold' }}>fetching<span style={{color: fdot}}>.</span><span style={{color: sdot}}>.</span><span style={{color: tdot}}>.</span></h1>
        </div>
    </>
  )
}

export default FetchingData