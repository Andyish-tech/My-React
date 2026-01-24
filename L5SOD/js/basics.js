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
let myarr=[1,3,5,6,9]
let total=0;

for(i of myarr){
    total= total + i
    console.log(`${i} = ${total} `)
}

let user={
    name:"Kw",
    age:14,
    
    info:function(){
        myInfo= `My name is ${this.name} and am aged ${this.age}`
        console.log(myInfo)
    }

}

console.log(user.info())

    const fullname = 'Ishimwe Andy'
        
      let myPar=document.getElementById('paragraph')
      let btn=document.querySelector('button.click_me')
      btn.addEventListener('click', changeButtonColor)
      myPar.innerHTML= ` <h1> ${fullname} </h1>`

      function changeButtonColor (){
        
        
            myPar.classList.toggle('change-color')

        
      }

      myPar.classList.add('ssdsdsd')

      
      
      // 4 with different class changes
      let card=document.querySelector(".card")

      function changeGreen(){
        card.className='change-green'
      }

      function changeRed(){
        card.className='change-Red'
      }

      function changeBlue(){
        card.className='change-Blue'
      }
      function changeYellow(){
        card.className='change-Yellow'
      }
