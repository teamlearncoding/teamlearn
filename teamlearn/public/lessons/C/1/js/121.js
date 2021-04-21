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

    if(fieldData === "int data = 10;" || fieldData === "int data=10;" || fieldData === "int data =10;" || fieldData === "int data= 10;"){
        
        alert("Well done");

        return true;
    }
    
    alert("Incorrect! Please try again");
    return false;
}