"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const whatbook_1 = require("./whatbook");
class BookList extends whatbook_1.WhatBook {
    constructor(authorName, bookTitle) {
        super(authorName, bookTitle);
        this.whatbook = [];
        this.authorName = authorName;
        this.bookTitle = bookTitle;
    }
}
// build method and function for new book
