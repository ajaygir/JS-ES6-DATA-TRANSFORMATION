'use strict'


//-MAP METHOD--
//.1.

let array = [1,2,3,4,5]

for (let i = 0; i < array.length; i++){
      array [i] = array[i]**2;

}
console.log(array)


//.2.

let myBooks = [
    {title: 'The Alchemist', author: 'Paulo Coelho'} ,
    { title: 'The Hitchhikers Guide to the Galaxy', author: 'Douglas Adams' },
     {title: 'To Kill a Mockingbird', author: 'Harper Lee'} 
  ];

  function getTitles(books) {
    return books.map(books => books.title);
  }

  let titles = getTitles(myBooks)
  console.log(titles)



//-FILTER METHOD--
//.1.

let numbers = [1,2,3,4,5,6,7,8,10]

let evennumbers = function (numbers){
    return numbers %2==0;
}
  
let filterednumbers = numbers.filter(evennumbers)
console.log(filterednumbers)

//.2.

let myBook = [
    {title: 'The Alchemist', author: 'Paulo Coelho', pages:400} ,
    { title: 'The Hitchhikers Guide to the Galaxy', author: 'Douglas Adams', pages:200 },
     {title: 'To Kill a Mockingbird', author: 'Harper Lee', pages :250} 
  ];

  function getpages(books) {
    return books.filter(books => books.pages > 300);
  }

let morepages = getpages(myBook)
console.log(morepages)



//--REDUCE METHOD--
//.1.

let mynumbers = [10,20,30,40,50]

let sum = mynumbers.reduce(function (acc,curr){
    return acc + curr
})

console.log(sum)

//.2.


let book = [
    {title: 'The Alchemist', author: 'Paulo Coelho', pages:400} ,
    { title: 'The Hitchhikers Guide to the Galaxy', author: 'Douglas Adams', pages:200 },
     {title: 'To Kill a Mockingbird', author: 'Harper Lee', pages :250} 
  ];

  function gettotalpages(books) {
    return books.reduce((total,book) => total + book.pages,0);
  }

let totalpages = gettotalpages(book)
console.log(totalpages)


