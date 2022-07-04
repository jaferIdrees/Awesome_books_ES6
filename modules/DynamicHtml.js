export default class DynamicHtml {
  static displayElements(booksCollection) {
    booksCollection.forEach((book, index) => DynamicHtml.addBookToTable(book, index));
  }

  static addBookToTable(book, id) {
    const bookList = document.querySelector('#book-list');
    const bookRecord = document.createElement('tr');
    const titleCell = document.createElement('td');
    titleCell.textContent = `"${book.title}" by ${book.author}`;
    const removeBtn = document.createElement('button');
    removeBtn.id = id;
    removeBtn.className = 'removeBtn';
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = this.removeBook;
    bookRecord.append(titleCell, removeBtn);
    bookList.appendChild(bookRecord);
  }

  static removeBook(e) {
    const id = parseInt(this.id, 10);
    const booksCollection = JSON.parse(localStorage.getItem('booksCollection'));
    booksCollection.splice(id, 1);
    e.target.parentNode.remove();
    localStorage.setItem('booksCollection', JSON.stringify(booksCollection));
  }
}