import React from 'react'

const PageNotFound = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <img 
        
        src={process.env.PUBLIC_URL + '/404PagError.jpg'} 
        
        alt="404 Page Error"

        style={{ width: '50vw', height: '90vh' }} 
        
        />
    </div>
  )
}

export default PageNotFound