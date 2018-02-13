// reducers are methods that return values from the application state
// the application can have many state 'pieces', we can create many reducers
// each reducer returning the whatever specific item we want

// reminder: all individual reducers need to be brought together in the combined reducer
// index.js

import { combineReducers } from 'redux';
import reducer_books from "./reducer_books";
import activeBook from './reducer_active_book';

const rootReducer = combineReducers({
    books: reducer_books,
    activeBook: activeBook,
});

export default rootReducer;
