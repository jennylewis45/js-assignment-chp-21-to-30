// chp 21 to 25....

let firstName=prompt("enter your first name")
let lastName=prompt("enter your last name")
let fullName=firstName + "" + lastName;
 alert("Hello, " + fullName + "!")


 let phoneModel=prompt("write your favourite mobile phone model")
 let length=phoneModel.length;
 document.write("your favourite mobile phone model ("+phoneModel+")is" + length + ".");


 let wor="Pakistani"
 let index=wor.indexOf("n")
document.write("the index of 'n' in the word 'Pakistani' is" + index + "." )


 let wo="Hello World";
 let LastIndex=wo.lastIndexOf("l")
 document.write("the last index of letter'l' in the word 'Hello World' is" + LastIndex + "." )


var someString = 'Pakistani';
 
document.write(someString.charAt(3));

let originalString='Hyderabad'
let newString=originalString.replace("Hyder","Islam")
document.write(newString)

let text = "Ali and Sami are best friends They play cricket and football together.";
let result = text.replace("and", "&");
document.write(result)


let number=parseInt("472")
document.write(number)
document.write("<br>")

document.write("value:472")

document.write("<br>")
document.write("type:string")
document.write("<br>")

document.write("value:472")
document.write("<br>")

document.write("type:number")

var food=prompt("write yor favourite dry fruit.")
document.write(food.toUpperCase())


var sentence=prompt("enter your favourite dry fruit")
var capitalizedSentence=sentence.charAt(0).toUpperCase()+sentence.slice(1).toLowerCase()
document.write(capitalizedSentence);
document.write("<br>")
document.write("<br>")


var num=35.36
var numString=num.toString().replace(".","")
document.write(numString)


var userName=prompt("Enter your Input: ");
Name(userName);
function Name(un)
{
    var message;
    var split=[];
    var arr=[];
    for(var i=0;i<un.length;i++)
    {
        split[i]=un.split("&nbsp;");
        arr[i]=un.charCodeAt(i);
        if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
        {
                message="Correct User Name";
        }
        while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
        {
            alert("please enter a valid userName");                                                                                                                   
            userName=prompt("Enter your Input: ");
            split[i]=un.split("&nbsp;");
            arr[i]=un.charCodeAt(i);
            if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
            {
                message="correct in";
                break;
            }
        }

    }
    alert(message);
}




const A = ["cake", "apple pie", "cookie", "chips", "patties"];

const userInput = prompt("Enter an item to search:").toLowerCase();

const found = A.find(item => item.toLowerCase() === userInput);

if (found) {
  alert(`${userInput} is found in the list.`);
} else {
  alert(`${userInput} is not found in the list.`);
}


  
let password = prompt("Enter a password: ");

while (!isValidPassword(password)) {
  password = prompt("Invalid password. Please enter a valid password: ");
}

document.write("Password is valid");

function isValidPassword(password) {
  if (password.length < 6) {
    return false;
  }
  if (/^\d/.test(password)) {
    return false;
  }
  if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
    return false;
  }
  return true;
}



var uni="University of Karachi";
var newUni = uni.split(" ");
document.write(newUni);


let fryo=prompt("enter your string")
let lastChar=fryo.charAt(fryo.length-1)
document.write("the last character is:" +lastChar)


const str = "The quick brown fox jumps over the lazy dog";
const word = "the";
const wordsArr = str.split(" ")
let count = 0;
for (let i = 0; i < wordsArr.length; i++) {
  if (wordsArr[i].toLowerCase() === word) {
       count++;
  }
}
document.write(`The word "${word}" appears ${count} times in the string.`);






