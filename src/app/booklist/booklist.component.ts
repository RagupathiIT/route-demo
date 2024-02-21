import { Component } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../shared/book.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Books } from '../book-data';
import { BootstrapModelComponent } from '../bootstrap-model/bootstrap-model.component';
import { BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.scss'
})
export class BooklistComponent {
  allBooks:Book[]|undefined;
  searchForm!: FormGroup;
  isModalOpen = false;
  selectedRow : any;

  constructor(private bookService:BookService, private fb:FormBuilder,
     private modalService: BsModalService){     //Dependency injection
    this.bookDetails();
  }
  ngOnInit(){
    this.searchForm = this.fb.group({
      searchText:[]
    })
  }
  bookDetails(){
    console.log('bookList component BookDetails Method called')
    this.allBooks=this.bookService.getAllBooks();   //Calling service methods from component 
  }

  onSearchTextChange(event:any){
    this.searchForm.controls['searchText'].valueChanges
    .pipe(debounceTime(500))
    .subscribe(()=> {
      if(this.searchForm.controls['searchText'].value.length > 2){
        const searchedBooks = this.allBooks?.filter((b) => b.name.toLowerCase().startsWith(event.target.value))
        console.log('searchedBooks', searchedBooks);
        this.allBooks = searchedBooks;
      }
      if(this.searchForm.controls['searchText'].value.length == 0){
        this.allBooks = Books;
      }
    })
  }

  openBootstrapModal(row: any){
    this.selectedRow = row;
    this.isModalOpen = true;
    const initialState = {name:row.name, author:row.author, price:row.price};
    this.modalService.show(BootstrapModelComponent, { initialState});
  }

  closeModal(){
    this.isModalOpen = false;
  }
}

