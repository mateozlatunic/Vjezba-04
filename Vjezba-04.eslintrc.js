
// -------------------------------------- Zadaci za Vjezbu IV ------------------------------------------------- //


/*
let array_1=[1,"dva", 3.1];
let array_2= new Array (1, "dva", 3.1);
let array_3=Array(1, "dva", 3.1);

console.log(array_1 [4]);
console.log(array_2);
console.log(array_3);

// {}

let array_11=[10];
let array_21=Array(10);
*/

// nauci razliku izmedu for in-a i out-a 

/*
for(let i=0; i<fruits.length;i++){
    console.log[i];
}

for(const iterator in fruits){
    console.log[key];
}

for(const iterator in fruits){
    console.log[iterator];
}
*/

/*
fruits.forEach(function(x){
    console.log(x)
});
*/

/*
const fruits=["apple", "banana", "cherry"];
fruits.forEach(x=>console.log(x))
fruits.push("apple");
fruits.pop("apple");
*/

/*
let myArray=["a","g","b","c","d","e"];
let myArray2=["f","h"];
// myArray=myArray.slice(1,4);
console.log(myArray.concat(myArray2).sort());
*/

/*
let myArray=["banana", "apple"];
let myArray2=myArray;
// let index=arr.indexOf("apple");
myArray[1]="ananas";
console.log(myArray2);
*/

// !!! što je konstanta, a što referenca !!!
// =========== HACK: drzis 'ctrl' i kliknes na 'console.log()' da si otvoris pomocnik ===========

/*
const originalArray=[1,2,3];
const shallowCopyArray=originalArray;
const shallowCopyArray2=Array.from(originalArray);
const deepCopyArray=JSON.parse(JSON.stringify(originalArray));

shallowCopyArray[0]=4;
shallowCopyArray2[0]=4;
deepCopyArray[0]=5;

console.log(originalArray);
console.log(shallowCopyArray);
console.log(deepCopyArray);
console.log(originalArray);
*/

/*
let numbers =[1,2,3,4,5];
let squares= numbers.map((numb) => {
    return number * number;
});
console.log(squares);

let squares2=[];
for (const numb of numbers) {
    squares2.push(numb*numb);
}
console.log(squares2);
*/

/*
let arr=new Array();
arr.
*/

// 1. Zadatak: Kreiraj polje koje sadrzi brojeve od 1-10, i ispisati sve
//             brojeve ciji je zbroj jedna broju 10

/*
let number=[1,2,3,4,5,6,7,8,9,10];
let target=10;

for (let i=0; i<number.length; i++){
    for(let j=i+1; j<number.length;j++){
        if(number[i]+number[j]==target) {
            console.log(number[i], number[j]);
        }
    }
}
*/

// 2. Zadatak: Sastavi listu 6 studenata na nakeom kolegiju sa sljedecim svojstvima:
//             name, age, gender, grade. Kreiraj funkciju koja vraca sve podatke najbolje studentice 
//             na kolegiju
// ERROR: negdje je greska

/*
let students=[
    {name: 'John', age: 21, gender: 'male', grade: 85},
    {name: 'Mary', age: 19, gender: 'female', grade: 92},
    {name: 'David', age: 25, gender: 'male', grade: 78},
    {name: 'Ana', age: 22, gender: 'female', grade: 89}
]


// stavi debager tako da klines na neki red i kloknes F5

function topStudnet(){
    let topGrade=0;
    let topFemaleStudent=null;

    for(let student of students){
        if(student.gender==='female' && student.grade > topGrade){
            topGrade =student.grade;
            topFemaleStudent=student;
        }
    }
    return topFemaleStudent;
}
console.log(topFemaleStudent);
*/

// 3. Zadatak: Svaki element u zadanom polju objekata transformiraj na nacin da mu dodas svojstvo "sales"
//             koje ce sadrzavati random broj prodanih primjeraka knjiga

/*
const books= [
    {title: "The Great Gatsby", author:"F. Scott Fitzgerald", publicationYear: 1925},
    {title: "How to kill a mockingbird", author:"Harper Lee", publicationYear: 1960}
]

for(let book of books){
    book["sales"]=Math.floor(Math.random()*100);
}

console.log(books);

const bookWithSales= books.map(book => {
    return {
        tittle: book.title,
        author: book.author,
        publicationYear: book.publicationYear,
        sales: Math.floor(Math.random()*100)
    }
});
console.log(bookWithSales);

*/

// 4. Zadatak naslov knjige koja he izdana 1925
// ERROR

/*
let bookTitle =books.filter((book) => {
    return book.publicationYear==1925;

}).map(book) => {
    return book.title;
}

console.log(bookTitle);
*/

// 5 Zadatak: Iskoristi funkciju reduce tako da ugnijezdeno polje pretvoris u jedinstveno
// ERROR
/*
const myArray=[[1,2], [3,4], [5,6]];
const flattenedArray=myArray.reduce((accumulator,currentValue) => {
    return accumulator.concat(currentValue);
}, []);
*/

