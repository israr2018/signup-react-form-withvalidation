import React from 'react';
import logo from './logo.svg';
import './style.css';
import useFormValidation from './useFormValidation';
import validate_auth from './validate_auth';
const INITIAL_STATE={
  email:"",
  password:""
}

function App() {
//  const [email,setEmail]= React.useState("");
//  const [password,setPassword]= React.useState("");
// handleChange();
const {handleSubmit,handleChange,handleBlur,disable,values,errors}=useFormValidation(INITIAL_STATE,validate_auth);
const{firebaseError,setFirebaseError}=React.useState(null);
// async function authenticateUser(){
//   const {email,password}=values;
//   try{
//       await  firebase.register(email,password)

//   }
//   catch(err){
//     console.error("Authentication error",err);
//     setFirebaseError(err.message);

//   }
  
// }
  return (
   
    <div className='form-wrap'>
        <form onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <input 
                onChange={handleChange}
                onBlur={handleBlur}
                type="text" 
                placeholder="Email" 
                name="email"
                className={errors.email && 'error-input'}
                values={values.email}
            />
            {errors.email && <p className='error-text'>{errors.email} </p> }
            <input 
                onChange={handleChange}
                onBlur={handleBlur}
                type="password" 
                placeholder="Password" 
                name="password"
                className={errors.password && 'error-input'}
                values={values.password}
                className={errors.password && 'error-input'}
            />
            {errors.password && <p className='error-text'>{errors.password} </p> }
            <input type="submit" value="Sign Up" disabled={disable}/>
                {disable}
        </form>
    </div>

  );
}

export default App;
