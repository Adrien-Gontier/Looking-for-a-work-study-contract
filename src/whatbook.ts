export class WhatBook {

    private _authorName: string;
    private _bookTitle: string;

    constructor(an: string, bt:string) {
        this._authorName = an;
        this._bookTitle = bt;
    }

    get authorName(): string {
        return this._authorName;
    }

    set authorName(authorName: string) {
        this._authorName = authorName;
    }

    get bookTitle() {
        return this._bookTitle;
    }

    set bookTitle(bookTitle: string) {
        this._bookTitle = bookTitle;
    }

}