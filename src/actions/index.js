// an action creator is a function. it takes an argument (e.g. a book)
// the argument is coming from whomever triggered the action creator
// we need to return an 'action object' (in old school terms, like a custom event object)
// type is usually a constant
// payload is optional.


export function selectedBook(book) {
  console.log('selectedBook(): Book selected : ', book);
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}


