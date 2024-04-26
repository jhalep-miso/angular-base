import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBook!: Book;
  selected: Boolean = false;

  constructor(private bookService: BookService) {}

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  ngOnInit() {
    this.getBooks();
  }

  onSelected(book: Book): void {
    this.selected = true;
    this.selectedBook = book;
  }
}
