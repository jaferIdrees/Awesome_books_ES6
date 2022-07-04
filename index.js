/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */

import Book from './modules/Book.js';
import BooksCollection from './modules/Books_collection.js';
import DynamicHtml from './modules/DynamicHtml.js';
import nav from './modules/Nav_Menu.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

document.getElementById('date').innerText = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
const addBtn = document.getElementById('book-form');
let booksCollection = new BooksCollection();
if (localStorage.getItem('booksCollection')) {
  booksCollection = JSON.parse(localStorage.getItem('booksCollection'));
}
addBtn.addEventListener('submit', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const book = new Book(title, author);
  booksCollection.push(book);
  const id = booksCollection.length - 1;
  DynamicHtml.addBookToTable(book, id);
  localStorage.setItem('booksCollection', JSON.stringify(booksCollection));
});

window.addEventListener('load', () => {
  if (localStorage.getItem('booksCollection')) {
    booksCollection = JSON.parse(localStorage.getItem('booksCollection'));
  }
  DynamicHtml.displayElements(booksCollection);
  document.getElementById('listLink').click();
});

const navLinks = document.querySelectorAll('a');

navLinks.forEach((link) => {
  link.addEventListener('click', nav);
});
