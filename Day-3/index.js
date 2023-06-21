let a=12.34+45;
// cant be declared
//let age=34;
//let age=50;
var age=30;
var age=45;
console.log(a,age)
console.log(typeof a)
let x=100
{
    let x=20;
    console.log(x);
}
console.log(x); 
let c=-1/0;
console.log(c);
let b=10n;
console.log(b,typeof b);

let num1=12;
let num2=15;
console.log("Addition of two numbers"+num1 + "and" +num2 + "is","=", num1+num2)

console.log(`addition of two number ${num1} and ${num2} is ${num1+num2}`);
//null
//undefined
let xtr;
console.log(xtr);

let obj=null;
console.log(obj);

const bool=true;
console.log(sece);
var sece='college';
// It will create a memory at the top but not initialized
//let sece='college'; //it will give as error

//symbol
//object
/*const user ={
    name:"abc",
    age: 19,
    phoneno:7397168226,
    email:"abcgmail.com",
    college:"eshwar"
};
delete user.age;
user.dep='cse'

console.log(user)
console.log(Object.keys(user));
*/

const user =Object.freeze({
    name:"abc",
    age: 19
})
const userx ={
    ... user,
    ag:70,
}
const usery ={... userx};
user.age=30;
console.log(userx, usery);
console.log(user)


/*const details={
    address:{
        street:'second stree',
        city:'coimbatore'
    }
}
console.log(details.name)
console.log(details.address.city)
*/


const details={
    //address:{
    //  street:'second stree',
        city:'coimbatore',
        age:20,
        name:"abc"
    }
//}

//console.log(details.address.city) -->it will give as error;
console.log(details?.address?.city) //-->undefined
for(const key in details){
    console.log(key,details[key])
}

//functions

/*function sum(num1,num2){
    return num1+num2;
    
}
console.log(sum(10,40));

function sum(num1,num2){
    if(typeof num1!=='number' || typeof num2 !== 'number'){
    return 'Invalid number'}
    return num1+num2;
    
}
console.log(sum("str",40));
console.log(sum(10,40));*/
//--Arrow function

/*const sum=(num1,num2)=>{
    if(typeof num1!=='number' || typeof num2 !== 'number'){
    return 'Invalid number'}
    return num1+num2;
    }

console.log(sum("str",40));*/

//Function call another function
/*function sum = (num1, num2) => num1 + num2;
function calculator = (num1, num2, operation) => {
  return operation(num1, num2);
};
calculator(10, 20, sum);*/

//IIFE FUNCTION
	// Declaring the parameter required.
(function(dt) {
	console.log(dt.toLocaleTimeString());
	// Passing the Parameter.
	})(new Date());

//String Methods
let str=" i am studying          at sece,";
console.log(str.trim());

console.log(str.replace('e','o'));
//console.log(str.replaceall('e','o'));

let arr=[1,2,3,'123','4','6.25']
//arr.push(1);
arr.pop();

console.log(arr);
console.log(arr[3]);

//
let arr1=[
    8,          //number
    undefined,  //undefined
    true,       //boolean
    null,         //null
    "123",
    6.25,
    (num1)=>num1*5,
    {a:1,b:2,c:3, say_hello:()=>"hello"}

];
console.log(arr1[7].b);


let arr2=[1,2,3,4,5];
console.log(arr2.unshift(1,2,3));
console.log(arr2);

let arr3=[1,2,3,4,5,6];
console.log(arr2.shift(1,2,3));
console.log(arr2);

/*let names=['dhatch','sudha','arun','keerthi','yasika'];
//let name_sliced=names.slice(1,4);
//console.log(names,name_sliced);

console.log(names.splice(1,2));
console.log(names);

let b1="sudha";
console.log(b1.slice(1,b1.length));

let str1= "sri eshwar college of engineering";
let str2=str1.split("r");
console.log(str2);
console.log(str2.join("abc"));

str=[1,2,3,4,"sri","eshwar","college"];
console.log(typeof str.join(''));
*/
//charAt
//let text="notsece";
//console.log(text.charAt(5));

let str3="star school";
//let str4=str3.toUpperCase();
//console.log(str4);
let str4=str3.toLowerCase();
console.log(str4);

const name="dhatch sudha arun keerthi yasika";
const arr5=name.split(" ");
for(var i=0;i<arr.length;i++){
    arr5[i]=arr5[i].charAt(0).toUpperCase()+arr5[i].slice(1);

}
const name1=arr5.join(" ");
console.log(name1);