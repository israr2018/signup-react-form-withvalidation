import React from 'react';
import { validate } from '@babel/types';
export default function useFormValidation(initialState,validate){
// const [values,setValues]=React.useState(initialState,validate); 
const [values,setValues]=React.useState(initialState); 
const [errors,setErrors]=React.useState({});
// const [isSubmitting,setIsSubmitting]=React.useState(true);
const [disable,setDisable]=React.useState(true);
const [firstTimeLoad,setFirstTimeLoad]=React.useState(true);
React.useEffect(()=>{
    console.log("....userEffect....")
    const noErrors=Object.keys(errors).length===0; //true if no error, false if errors
    
        if(!noErrors){
            // disable the submit button, since there is error
            //disable={true}
            setDisable(true)
        }
        else{
            if(firstTimeLoad){
                setDisable(true);
                setFirstTimeLoad(false);
            }
            else{
                setDisable(false);
            }
            setDisable(false);
        }
    
},[errors]);
function handleChange(event){
    setValues({
        ...values,
        [event.target.name]:event.target.value
    })
    
}
function handleBlur(){
    console.log("handleBlur");
    console.log("handleBlur values",values);
    const validateErrors= validate(values);
    setErrors(validateErrors);
     
}
function handleSubmit(event){
    
    if(Object.keys(errors).length===0){
        console.log("Authenticated",JSON.stringify(errors));
    }
    else{
        console.log("Coutld not authenticated",values.email,values.password,JSON.stringify(errors));
    }
    
    //setIsSubmitting(true);
   // validate(values)
    event.preventDefault();
   }
return {handleSubmit,handleChange,handleBlur,disable,values,errors};
}
