// reminder: all individual reducers need to be brought together in the combined reducer
// index.js

// also note that when the app is initialized, there are no values in state. set a default
// value


const activeBook = (state = null, action) => {
    //console.log('reducer_active_book:');
    //console.log('reducer_active_book: state',state);
    //console.log('reducer_active_book: action',action);
    //console.log('reducer_active_book: action.type ',action.type);

    // often branching is done here with switch...case
    // long and short is that you have to evaluate what is returned
    switch (action.type){
        case 'BOOK_SELECTED':
            console.log('returning something: ', action.payload);
            return action.payload;
            //break;
        default:
            return state;
            //break;
    }

    // return state;

};

export default activeBook;