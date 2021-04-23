const firstName = document.getElementById("txtFirstName");
const lastName = document.getElementById("txtLastName");
const email = document.getElementById("txtEmail");
const pwd = document.getElementById("txtPwd");
const form = document.getElementById("form");

function validateInpute(){
    //Check First Name
    if(firstName.value.trim() === ''){
        onError(firstName, 'First Name cannot be empty');
    }
    else{
        onSuccess(firstName);
    }
    
    //Check Last Name
    if(lastName.value.trim() === ''){
        onError(lastName, 'Last Name cannot be empty');
    }
    else{
        onSuccess(lastName);
    }

    // Check Email
    if(email.value.trim() === ''){
        onError(email, 'Email cannot be empty');
    }
    else{
        if(!isValidEmail(email.value.trim())){
            onError(email, 'Looks like this is not an email');
        }
        else{
            onSuccess(email);
        }
    }

    //Check Password
    if(pwd.value.trim()===""){
        onError(pwd, 'Password cannot be empty');
    }
    else{
        onSuccess(pwd);
    }
}

document.querySelector("#txtSubmit")
.addEventListener("click", (event)=>{
    event.preventDefault();
    validateInpute();
})

function onSuccess(input){
    const parentElement = input.parentElement;
    const messageElement = parentElement.querySelector("small");
    const fontAwesomeIcon = parentElement.querySelector('.fa-exclamation-circle');
    
    messageElement.style.visibility = 'hidden';
    fontAwesomeIcon.style.visibility = 'hidden';
    messageElement.innerText = 'Error';
    parentElement.classList.remove("error");
}

function onError(input, msg){
    const parentElement = input.parentElement;
    const messageElement = parentElement.querySelector('small');
    const fontAwesomeIcon = parentElement.querySelector('.fa-exclamation-circle');

    messageElement.innerText = msg;
    messageElement.style.visibility = 'visible'; 
    fontAwesomeIcon.style.visibility = 'visible';           
    parentElement.classList.add("error");        
}

function isValidEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
 }