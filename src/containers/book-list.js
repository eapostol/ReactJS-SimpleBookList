import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class Booklist extends Component {

    constructor(){
        console.log('in book-list.js');
        super();
    }

    renderList() {
        let bookExtraction = (book) => {
            // book is the book object being returned;
            // console.log('passing book: ', book);
            return (<li onClick={ (() => { console.log('click: ', book); this.props.selectedBook(book) }) }
                key={book.title}
                className="list-group-item">
                {book.title}
                </li>);
        };
        // console.log('book-list.js > this.props.books = ', this.props.books);
        return this.props.books.map(bookExtraction);
    }
    render () {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    // will return props
    console.log(state);
    return ({
        books: state.books,
    });
};

const mapDispatchToProps = (dispatch) => {
    // whenever a book is selected, the selectedBook should be
    // passed to all the reducers
    return bindActionCreators( {selectedBook: selectedBook }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(Booklist);