import { WhatBook } from "./whatbook";

class BookList extends WhatBook {
    
    private whatbook: [] = [];

    constructor(authorName: string, bookTitle: string) {
        super(authorName, bookTitle)
        this.authorName = authorName;
        this.bookTitle = bookTitle;
    }

}

// build method and function for new book