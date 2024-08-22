import axios from "axios";

export const ConfFormSreenSectionAction = (inputVal) => {
    return {
      type: 'ConfFormSreenSectionAction',
      payload: inputVal
    }
  }


  export const ConfFormSectionScreen = () => {

    return (data) => {
  
      axios.get('http://localhost:5000/api/confFormSectionScreen')
      .then(response => {
          data(ConfFormSreenSectionAction(response.data))
      })
      .catch(error => {
        data(ConfFormSreenSectionAction([]))
      });
  
    }
  
  }