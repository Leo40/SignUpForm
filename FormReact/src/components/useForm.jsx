import {useState} from 'react'

const useForm = (validateUserInfo) => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
 
    const [errors, setErrors] = useState({});

    const handleChange = e => {        
        const { name, value } = e.target;        
        setValues({
            ...values,
            [name]: value
        });    
    }; 

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validateUserInfo(values));
    }

    return { handleChange, handleSubmit, values, errors };
}

export default useForm