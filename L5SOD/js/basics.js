function partReg(age){   

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

function login(email, Password){
    
    if(email=== "andy@gmail.com"){
        if(Password=== 123){
            console.log("Login Successfully")
        }
        else{
            console.log("Incorrect Password")
        }
    }
    else{
        console.log("Incorrect email")
    }
}

 function multTable(mult){
    for(i=1; i<=10; i++){
    result=mult*i;
    console.log(`${mult} x ${i} = ${result}`);
}
 }

 // for with arrays
myarr=[1,3,5,6,9]
for(i of myarr){
    i=i
    console.log(i)
}


