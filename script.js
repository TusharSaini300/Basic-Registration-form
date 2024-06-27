function seterror(id, error){
    // sets error inside tag of id
    ele= document.getElementById(id);
    ele.getElementsByClassName("error")[0].innerHTML = error;  // span class value is changed to error message
    
}
function clearError(){          // when error is treated and now want to remove the error message
    errors = document.getElementsByClassName("error");
    for(let item of errors){
        item.innerHTML = "";
    }
}
function validateForm(){
    let returnval = true; // form will submit when it is true
    clearError();

    //perform validation and if validation fails, set the value of returnval to false
    let name = document.forms['myForm']["fname"].value;
    if(name.length<4){
        seterror("frontname", "*Name is too short!");
        returnval = false;
    }
    
    let email = document.forms['myForm']["mail"].value;
    if(email.length>15){
        seterror("mail", "*Email is too long!");
        returnval = false;
    }
    let pass = document.forms['myForm']["password1"].value;
    if(pass.length<8){
        seterror("password1", "*Password should be of 8 characters");
        returnval = false;
    }
    let pass2 = document.forms['myForm']["password2"].value;
    if(pass2!=pass){
        seterror("password2","*Password do not match")
        return false;
    }
    
    return returnval;  
}