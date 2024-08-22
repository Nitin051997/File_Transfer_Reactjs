import React from 'react'
import { FieldTypeDropDown, FieldTypeText } from './SectionFieldTypes'

const FormSectionFields = ({ fieldData }) => {
  return (
    <>
        {fieldData.map((res) => {

            if(res.fieldType == 'text'){

                return <FieldTypeText fielDetails={res}/>

            }else if(res.fieldType == 'dropdown'){

                return <FieldTypeDropDown fielDetails={res}/>

            }
        })}
    </>
  )
}

export default FormSectionFields