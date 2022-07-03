// ## An object-oriented book-list!

// - [ ] Create a class BookList
// - [ ] Create another class called Book

// #### Each Book should have several properties:

// 1. Title
// 2. Category
// 3. Author
// 4. isRead (default to `false`)
// 5. finishedDate

// Book class will have the following methods:

// - `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

// #### BookList should have the following properties:

// 1. An array of all the Books
// 2. Current read book index

// #### BookList Methods

// - [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
// - [] `getCurrentBook()` should return the current book using the `index` and the book array
// - [] `getNextBook()` should return the next book using the `index` and the book array
// - [] `getPrevBook()` should return the previous book using the `index` and the book array
// - [] `changeCurrentBook` should accept one parameter and update the current index.

// After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.

class Book{
    constructor(Title, Category, Author, isRead = false, finishedDate){
        this.Title = Title;
        this.Category = Category;
        this.Author = Author;
        this.isRead = isRead;
        this.finishedDate = finishedDate;
    }
    markBookAsRead(){
        this.isRead = true;
        this.finishedDate = Date.now();
    }


}

class BookList extends Book{
    constructor(){
        super(Title, Category, Author, isRead = false, finishedDate);
        this.books = [];
        this.currentBook = this.books[index = 0];
    }
    add([book]){
        this.books.push([book]);
    }
    getCurrentBook(index){
        return this.books[index];
    }
    getNextBook(index){
        return this.books[index + 1];
    }
    getPrevBook(index){
        return this.books[index - 1];
    }
    changeCurrentBook(param){
        this.currentBook = this.books[param];
    }

}

let book1 = new Book("Sherlock Homes", "Fiction", "xyz", false, "24 Jan");
 

