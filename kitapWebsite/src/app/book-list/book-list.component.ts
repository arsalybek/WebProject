import { Component, OnInit } from '@angular/core';
import {Book} from '../books';
import {BooksCategoriesService} from '../books-categories.service';
import {ActivatedRoute} from '@angular/router';
import { bookCategories } from '../books-categories';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  booksList: Book[];
  name;
  bookCategories = bookCategories;

  constructor(private route: ActivatedRoute, private service: BooksCategoriesService  ) { }

  ngOnInit(): void {
    this.getId();
    this.getBooksByCategory();
  }

  getId(): void{
    this.name = this.route.snapshot.paramMap.get('book_category_name');
  }

  getBooksByCategory(): void {
    this.service.getBooksByCategory(this.name)
      .subscribe(booksList => this.booksList = booksList);
  }

}
