import { Injectable } from '@angular/core';
import { Books } from '../book-data';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  allbooks = Books;
  constructor() { }

  getAllBooks(){
    console.log('BookService GetAllBooks Method called');
    return Books;
  }

  getBookById(bookid: number){
    const foundBook = Books.find((book) => book.id == bookid);
    console.log(foundBook);
    return foundBook;
  }
}
