//MOdify Array Data
var ourArray=[10,20,30];
ourArray[1]=40;
console.log(ourArray)//10,40,30

//push
ourArray.push(50);
console.log(ourArray)//10,40,30,50

//pop
ourArray.pop();
console.log(ourArray)//10,40,30

//shift
ourArray.shift();
console.log(ourArray)//40,30

//unshift
ourArray.unshift(10);
console.log(ourArray)//10,40,30









//if
function practice(on){
    if(on){
        return "true it is";
    }
    return "false it is";
}
console.log(practice(false));



function compare(a,b){
    if(a==b){
        return "Equal";
    }
    return "not Equal";
}
console.log(compare(10,20));//not equal
console.log(compare(10,10));//equal 
console.log(compare(10,"10"));//not equal when a===b










//creating objects

var dog ={
    "name":"champ",
    "legs":4,
    tails:1

};
console.log(dog); //{ name: 'champ', legs: 4, tails: 1 }


//changing object property
dog.name="champi";
console.log(dog);//{ name: 'champi', legs: 4, tails: 1 }


//adding object property
dog.bark ="baw baw";
console.log(dog);//{ name: 'champi', legs: 4, tails: 1, bark: 'baw baw' }


//deleting property
delete dog.bark;
console.log(dog);//{ name: 'champi', legs: 4, tails: 1 }


//checking property
function checkobj(property){

    if(dog.hasOwnproperty(property)) {
     return dog[property];
    } else {
        return "change it"
        }
   }
//console.log(checkobj("tails"));


//while
var myArray =[];
var i=0;
while(i<5){
    myArray.push(i);
    i++;
}
console.log(myArray); //[ 0, 1, 2, 3, 4 ]


//for 
for(var i=1; i<6; i++){
    myArray.push(i);
}
console.log(myArray);//[1, 2, 3, 4, 5]

//do while
do{
    myArray.push(i);
    i++;
}while(i<5)
console.log(myArray);

//let doesnot give to call a variable twice
//var does
//const does not reasigned again


//getters and setters
function makeclass()
{
class Book{
    constructor(author){
        this._author = 5/9 *(author);
    }
    get writer(){
        return this._author;
    }
    set writer(updatedAuthor){
        this._author= updatedAuthor;
    }
}
return Book;
}

const Book = makeclass();
const book = new Book(9);
let bk = book.writer;
book.writer=10;
bk = book.writer;
console.log(author);