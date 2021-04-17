function validate(form) {
    var codeField = form.code;

    if (isNotEmpty(codeField)){
       return true;
    }
    return false;
}


function check(field) {

    var fieldData = field.value;

    if(fieldData === "printf"){
        alert("Well done");
        return true;
    }else{
        alert("Incorrect! Please try again");
        return false;
    }
}