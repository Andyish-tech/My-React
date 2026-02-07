word = ['milk','milenium','money','moon']
String = 'mil'
String1 = 'mo'

if(String.startsWith('mil') == true && String1.startsWith('mol' == true)){
    console.log(word[0],word[1])
}

function checkPalindrome(str){
     newWord = str.split('').reverse().join('')
     return str === newWord
}
console.log(checkPalindrome('wer'))

