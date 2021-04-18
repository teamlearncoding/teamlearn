function validate(form) {
    var codeField = form.code;

    if (check(codeField)){
       return true;
    }
    return false;
}


function check(field) {

    var fieldData = field.value;

    if(fieldData === ""){
        alert("The prompt cannot be left empty");
        
        return false;
    }

    if(fieldData === "printf"){
        
        alert("Well done");

        return true;
    }
    
    alert("Incorrect! Please try again");
    return false;
}