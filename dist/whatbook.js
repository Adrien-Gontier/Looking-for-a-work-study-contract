"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatBook = void 0;
class WhatBook {
    constructor(an, bt) {
        this._authorName = an;
        this._bookTitle = bt;
    }
    get authorName() {
        return this._authorName;
    }
    set authorName(authorName) {
        this._authorName = authorName;
    }
    get bookTitle() {
        return this._bookTitle;
    }
    set bookTitle(bookTitle) {
        this._bookTitle = bookTitle;
    }
}
exports.WhatBook = WhatBook;
