class Book{
    constructor(Title, Category, Author){
        this.Title = Title;
        this.Category = Category;
        this.Author = Author;
        this.isRead = false;
        this.finishedDate = null;
    }
    markBookAsRead(){
        this.isRead = true;
        this.finishedDate = Date.now();
    }
}

class BookList {
    constructor(){
        // super(Title, Category, Author, isRead = false, finishedDate);
        this.books = [];
        this.currentIndexBook = 0;
    }
    add(books = []){
        this.books = this.books.concat(books);
        return this.books;
    }
    getCurrentBook(){
        return this.books[this.currentIndexBook];
    }
    getNextBook(){
        this.currentIndexBook = this.currentIndexBook + 1;
        return this.books[this.currentIndexBook];
    }
    getPrevBook(){
        this.currentIndexBook = this.currentIndexBook - 1;
        return this.books[this.currentIndexBook];
    }
    changeCurrentBook(index){
        this.currentIndexBook = index;
        return this.currentIndexBook;
    }

}

let book1 = new Book("Sherlock Homes", "Fiction", "Vijay");
let book2 = new Book("Sherlock Homes2", "Fiction2", "Vijay2");
let book3 = new Book("Sherlock Homes3", "Fiction3", "Vijay3");
let book4 = new Book("Sherlock Homes4", "Fiction4", "Vijay4");
let book5 = new Book("Sherlock Homes5", "Fiction5", "Vijay5");

let library = new BookList();

library.add([book1, book2, book3, book4, book5]);


