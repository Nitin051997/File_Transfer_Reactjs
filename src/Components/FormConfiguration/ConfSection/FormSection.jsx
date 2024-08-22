import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material'
import { Typography } from '@mui/material'
import React from 'react'
import FormSectionFields from './FormSectionFields'

const FormSection = ({ sectionData }) => {

  const handleAddFields = (sysUniqueId) => {
    console.log(sysUniqueId);
  }

  return (
    <>
        <Accordion sx={{backgroundColor: 'white', padding: '-10vh', width: '90%', }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography noWrap style={{textTransform: 'none', width: '15vw', fontSize: '16px', borderRadius: '6px', textAlign: 'left'}}>{sectionData.sysUniqueId}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <form style={{paddingLeft: '', paddingTop: ''}}>
                <FormSectionFields fieldData={sectionData.sectionData}/>
            </form>
            <Button onClick={() => {handleAddFields(sectionData.sysUniqueId)}}>Add Fields</Button>
            </AccordionDetails>
        </Accordion>
    </>
  )
}

export default FormSection