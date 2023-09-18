
function FormValidate(){
    const inpt = document.getElementsByClassName("myforms").value;
    const name=document.myform.name.value;
    const email=document.myform.email.value;
    const password=document.myform.pwd1.value;
    const confirm_password = document.myform.pwd2.value;
    if(name==null || name==""){
        alert("Please enter the valid name");
    }else if(password==null){
        alert("please enter password");
    }else if(email==""){
        alert("please enter your email id");
    }else if(password==null || password==""){
        alert("please enter your password");
    }
    else if(password.length<8){
        alert("password must be 8 characters")
    }
    else if(password!=confirm_password){
        alert("password mismatch");
    }
}