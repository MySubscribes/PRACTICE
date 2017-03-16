import {Injectable} from "@angular/core";
import {Books} from "./books";


let books = [
    new Books(1, 'Hello World', 'Img'),
    new Books(2, 'Hello World', 'Img'),
    new Books(3, 'Hello World', 'Img')
];

let booksPromise = Promise.resolve(books);

@Injectable()
export class BooksService {
    getAll(): Promise <Books[]>{
        return booksPromise;
    }


    getBook(id: number):Promise<Books>{
        return booksPromise
            .then( books => books.find(x => x.id == id))
    }
}

