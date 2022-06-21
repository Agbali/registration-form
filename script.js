//Target id and classes

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
 
let firstname = id("firstname"),
    lastname = id("lastname"),
    emailadd = id("emailadd")
    passsword = id("password");
    form = id("form"),
    errorMsg = classes("error")
    successIcon = classes("success-icon")
    failureIcon = classes("failure-icon")


//Add event listener

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    engine(firstname, 0, "First Name cannot be Empty");
    engine(lastname, 1, "Last Name cannot be Empty");
    engine(emailadd, 2, "Looks like this is not an email");
    engine(passsword, 3, "Password cannot be empty");
})



let engine = (id, serial, message) => {

    if(id.value.trim() === ''){

        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else{

        errorMsg[serial].innerHTML = "";
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }

}
