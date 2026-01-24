function login(age){
    if (age>=18 && age<=30){
        console.log("Old enough you are granted all features")
    }
    else if(age<18 && age>=10){
        console.log("You are logged in as Kid")
    }
    else if(age<10){
        console.log("You are too young to visit this site")
    }
    else{
        console.log("You are not allowed to part")
    }
}

login(38)