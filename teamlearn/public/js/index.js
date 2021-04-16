function redirect_to_github(){
    if(confirm('This will redirect you to https://github.com/koreaneggroll/')){
        window.open("https://github.com/koreaneggroll/");
        console.log("User is being redirected to: https://github.com/koreaneggroll/");
    }
    else{
        console.log("Redirect stopped");
    }
}


function redirect_to_ig(){
    window.open("https://www.instagram.com/teamlearncodingofficial/");
}


function redirect_to_org(){
    window.open("https://github.com/teamlearncoding");
}


function redirect_to_repo(){
    window.open("https://github.com/teamlearncoding/teamlearn");
}


function redirect_to_mit(){
    window.open("https://opensource.org/licenses/MIT");
}
