/* const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

// -------- Object Destructuring ------
const book = getBook(1);
book;

// const title = book.title;
// title;
// const author = book.author;
// author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
//NB: the variables should be same as object's real properties name
title;
author;

//---------- Array Destructuring ----------
// const primaryGenre = genres[0];
// primaryGenre;
// const secondarGenre = genres[1];
// secondarGenre;
// rest operator
const [primary, secondary, ...newArray] = genres;
primary;
secondary;
newArray;

// spread operator
const newGeneras = [...genres, "horror"];
newGeneras;

const updatedBook = { ...book, moviePublicationDate: "2017", pages: 1710 };
updatedBook;

// tarnery operator
let message = pages > 1000 ? "over thosand pages" : "less then thousand";
message;

// ------- logical operator ---------

// --------+ And Operator +----------

console.log(true && "some String");
// when the first value is true in anad operator then it will directly return the second value

console.log(false && "some String");
// when the first value is false then it will directly return the first value in and operator

//falsy value: 0, '', null, undefined, NaN
console.log(NaN && 1);

// -------+ Or operator +---------
console.log(true || "someString");
// in case of or operator if the first value is true it will directly return the true
// in case of if the first value is false then it will check the second value and so on
console.log(false || "someString");

//---+ knoledge corelessing operator +---
const count = NaN ?? "No data";
count;

// ?? this operator will only return the second value of the first value is null or undefined but not when it is 0 or empty string or NaN
//-----+ optional chaining +-----
function getTotalReview(bookReview) {
  let reviewCount1 = bookReview.reviews?.goodreads?.reviewsCount ?? 0;
  let reviewCount2 = bookReview.reviews?.librarything?.reviewsCount ?? 0; // use knoledge operator to prevent nan if it gives undefined then it will simply return 0
  return reviewCount1 + reviewCount2;
}

const bookReview = getBook(1);
const getTotalCount = getTotalReview(bookReview);
getTotalCount;

//-------+ Map Method +-------
const essentialData = data.map((book) => ({
  title: book.title,
  author: book.author,
  reviewscount: getTotalReview(book),
}));

essentialData;

//---- filter method ------
const filterBookPages = data.filter((book) => {
  return book.pages > 500;
});
filterBookPages;

// -------+ Reduce m=Method +--------
const totalPages = data.reduce((accu, book) => {
  return accu + book.pages;
}, 0);
totalPages;

// ---------------+ sort method +---------------
const sortByPage = data.slice().sort((a, b) => {
  return a.pages - b.pages;
});
sortByPage;

// -----+ Working With Immeutable Arrays +-----
// 1) Add new Book
const newBook = {
  id: 6,
  title: "Harry Potter and the Chaber of Secrets",
  author: "J.K,Rowling",
};
const booksAfterAdd = [...data, newBook];
booksAfterAdd;

// 2). Delete book object from array
const bookAfterDelete = booksAfterAdd.filter((book) => {
  return book.id != 3;
});
bookAfterDelete;

// -------------+  upadte book object in the array +-------------
const bookafterUpdate = bookAfterDelete.map((book) => {
  return book.id == 1 ? { ...book, pages: 1210 } : book;
});
bookafterUpdate;
*/

//--- Async js -----
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("jonas");

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}
// const todos = await getTodos();
const todos = getTodos();
console.log(todos);
console.log("jonas");
