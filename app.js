//getting all the values for further validation
const form=document.querySelector('#Contact-form');
const uname=document.querySelector('#name');
const email=document.querySelector('#Email');
const number =document.querySelector('#phno');
const message=document.querySelector('#message');
let thank=document.getElementById("thankyou");
// creating a event listener for the form submission event
form.addEventListener('submit',(e)=>{
    if(!validateInputs()){
        e.preventDefault();
        thank.innerText='';
    }
    else{
        thank.innerText=`Thank You ${uname.value}`
        alert(`Thank you.Your message has been saved`)
    }
    e.preventDefault();
    
})
// this function is used to validate all the inputs are correct or not
function validateInputs(){
    const nameVal=uname.value.trim();
    const emailVal=email.value.trim();
    const numVal=number.value.trim();
    const messageval=message.value.trim();
    let done=true;

    console.log("h1")
    //here name is checked whether it is empty
    if(nameVal===''){
        done=false;
        error(uname,"Enter a name here")
    }
    else{
        success(uname)
    }

    if(emailVal===''){
        done=false;
        error(email,'Enter a email')
    }
    else if(!validateEmail(emailVal)){
        done=false;
        error(email,'Enter a valid email')
    }
    else{
        success(email)
    }

    if(numVal===''){
        done=false;
        error(number,'enter a number')
    }
    else if(!(numVal.length==10)){
        done=false;
        error(number,'enter the correct number range')
    }
    else{
        success(number)
    }


    if(messageval===''){
        done=false;
        error(message,'enter a message here')
    }
    else{
        success(message)
    }

    return done;
}
// this function is used to set error message in the form 
 function error(element,message){
    const input=element.parentElement;
    const errorElement= input.querySelector('.error');
    errorElement.innerText=message;
    input.classList.add('error')
    input.classList.remove('success')

 }
 // this function is used to set success message in the form 
 function success(element){
    const input=element.parentElement;
    const errorElement=input.querySelector('.error');

    errorElement.innerText='';
    input.classList.add('success')
    input.classList.remove('error')
}
//this is used to validate the email
const validateEmail=(email)=>{
    return String(email).match( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
}