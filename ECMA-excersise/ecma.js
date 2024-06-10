class Book {
    constructor(Title, Author, Publication) {
        this.Title = Title;
        this.Author = Author;
        this.Publication = Publication;
    }
    getBookInfo() {
        console.log(`The book: ${this.Title} by ${this.Author} was published in ${this.Publication}`);
    }
}

class Library {
    constructor(Name) {
        this.Name = Name;
        this.Books = [];
    }
    addBook (book) {
        this.Books.push(book);
    }

    removeBook(Title) {
        const book = this.Books.find(book => book.Title === Title);
        if (book === undefined) {
            console.log(`${Title} not found`);
        }
        this.Books = this.Books.filter(book => book.Title != Title);
   }

    listBooks() {
        if (this.Books.length === 0) {
            console.log("Library is empty")
        }
        for (const book of this.Books) {
            book.getBookInfo();
        }
    }

}

const testBook1 = new Book("Nalle puhs äventyr", "Someone", 1998);

const library1 = new Library("Åstorps bibliotek");
library1.addBook(testBook1);

library1.listBooks();

library1.removeBook("Nalle puhs äventyr");
library1.listBooks();