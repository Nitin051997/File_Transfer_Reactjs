import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreatePaperList = ({ setLoadBar }) => {

  const navigate = useNavigate()

  const handleCreatePaper = () => {
    setLoadBar(true)
    setTimeout(() => {
        setLoadBar(false)
        navigate('/paperCreate')
    }, 500);
  }

  return (
    <>  
        <Button onClick={() => {handleCreatePaper()}} sx={{ backgroundColor: '#2c4c9c', color: '#d5dbeb', width: '120px', height: '40px' }}>Create <Add/></Button>
    </>
  )
}

export default CreatePaperList