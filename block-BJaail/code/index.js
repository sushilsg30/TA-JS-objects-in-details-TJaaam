class Booklist{
    constructor(root, list = []){
        this.books = list;
        this.root = root;
    }
    add(name, author, isbnNumber){
        let book  = new Book(name, author, isbnNumber);
        this.books.push(book, author, isbnNumber);
        this.createUI();
        return this.books.length;
    }
    delete(id){
        let index = this.books.findIndex((book) => book.id === id);
        this.books.splice(index, 1);
        return this.books.length;
    }
    createUI(){
        this.root.innerHTML = "";
        this.books.forEach(book => {
            this.root.append(book.createUI());
        })
    }
}

class Book {
    constructor(name, author,isbnNumber){
        this.name = name;
        this.author = author;
        this.isbnNumber = isbnNumber;
        this.isRead = false;
        this.id = `id-${Date.now()}`;
    }
    handleCheck(){
        this.isRead = !this.isRead;
        this.createUI();
    }
    createUI(){
        let li = document.createElement("li");
        li.classList.add("flex");
        let input = document.createElement("input");
        input.type = "checkbox"
        input.checked = this.isRead;
        input.addEventListener("click", this.handleCheck.bind(this));
        let h4 = document.createElement("h4");
        h4.innerText = this.name;
        let h5 = document.createElement("h5");
        h5.innerText = this.author;
        let span = document.createElement("span");
        span.innerText = "X";
        // span.addEventListener("click", handleDelete);
        li.append(input, h4, h5, span);
        // let ul = document.querySelector(".book-list");
        // ul.append(li);
        return li;
    }
}


let myBook = new Booklist(document.querySelector(".book-list"))

myBook.add("Sherlock", "Vijay", 222222);
// myBook.add("Sherlock2", "Vijay2", 22222233);