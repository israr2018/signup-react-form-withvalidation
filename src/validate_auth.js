export default function validate_auth(values){
    let errors={};
    if(!values.email){
        errors.email="Email Required";

    }
    // if(!'/abc/'.test(values.email)){
    //     errors.email="Invalid Email Address";

    // }
    if(!values.password){
        errors.password="Password is requried";
    }
    else if(values.password.length<6){
        errors.password="Password must be three charactors";
    }

    return errors;
    
}