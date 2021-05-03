export default function validateUserInfo(values) {
    let errors = {}

    const isInvalid = (email) => {
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    if(!values.firstName.trim()){
        errors.firstName = "First Name cannot be empty";
    }

    if(!values.lastName.trim()){
        errors.lastName = "Last Name cannot be empty";
    }

    if(!values.email.trim()){
        errors.email = "Email cannot be empty";
    }
    else{
        if(!isInvalid(values.email)){
            errors.email = "Looks like this is not an email";
        }
    }

    if(!values.password.trim()){
        errors.password = "Password cannot be empty";
    }

    return errors;
}