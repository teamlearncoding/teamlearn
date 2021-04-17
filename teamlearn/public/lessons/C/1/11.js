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
        
        if(confirm("Well done")){
            window.open(""); //This is supposed to be the next lesson(which isn't out yet)
            return true;
        }

        return true;
    }else{
        alert("Incorrect! Please try again");
        return false;
    }
}