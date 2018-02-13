
// test reducer returns our data model - an array of objects
// reminder: all individual reducers need to be brought together in the combined reducer
// index.js

const booksReducer = () => {
  let data = [
      /*eslint-disable no-script-url*/
      { title: 'JavaScript: Why Now? with ESLint producing a silly error', pages: '100'},
      { title: 'It is really a new buzzwords and patterns build on old buzzwords and patterns', pages: '200'},
      { title: 'Harry Potter and 265,000 Node Package Modules', pages: '265000'},
      { title: 'Orange is the new ES6', pages: '1'},

  ];
  return data;
};

export default booksReducer;

