function submitForm(form) {
    if(validateName(form)&& validateEmail(form)&&validateContactNum(form)&& checkDate(form)&&validateInstructor(form)){
        alert("Your appointment is booked");
        return true;
        
    
    }
    else{
        return false;
    }

}
/* Full Name*/
function validateName(form) {
    var fullName = form.elements["fullname"];
    if (fullName.validity.valueMissing) {
        fullName.setCustomValidity("Please enter your name");
        return false;
    }
    else {
        fullName.setCustomValidity("");
        return true;
    }
}
/*  Email Address */
function validateEmail(form) {
    var custEmail = form.elements["emailAddress"];
    if (custEmail.validity.valueMissing) {
        custEmail.setCustomValidity("Please enter your email address");
        return false;
    }
    else if (custEmail.validity.typeMisMatch) {
        custEmail.setCustomValidity("Email is not in a correct format ");
        return false;
    }
    else {
        custEmail.setCustomValidity("");
        return true;
    }

}
/* Contact Number */
function validateContactNum(form) {
    var contactnumber = form.elements["contactnumber"];
    if (contactnumber.validity.valueMissing) {
        contactnumber.setCustomValidity("Please enter Your contact number");
        return false;
    }
    else if (contactnumber.validity.patternMismatch) {
        contactnumber.setCustomValidity("Please enter the 10 digits contact number ");
        return false;
    }
    else {
        contactnumber.setCustomValidity("");
        return true;
    }
} 


/* Date */
function checkDate(form) {
    {
        var dateinput = form.elements["date"];
        if (dateinput.validity.valueMissing) {
            dateinput.setCustomValidity("Please enter the date");
            return false;
        }
        else if (date.validity.rangeUnderflow) {
            dateinput.setCustomValidity("Please enter the date greater than November 24, 2021");
            return false;
        }
        else {
            dateinput.setCustomValidity("");
            return true;

        }
    }
}

/* Select chef */
 function validateInstructor(form){
    var instrut = form.elements["instructor"];
    if (instrut.validity.valueMissing) {
        instrut.setCustomValidity("Please select an option");
        return false;
    }
    else{
        instrut.setCustomValidity("");
        return true;

    }

 }

