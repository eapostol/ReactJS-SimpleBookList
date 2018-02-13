import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

    constructor(){
        super();
        console.log('creating BookDetail: ',this); // cannot use this before super
    }

    render(){
        if(!this.props.book){
            return (
                <div>
                Select a book to get started.
                </div>
            );
        } else {
            console.log('BookDetail: render(), this.props', this.props);
            console.log('BookDetail: render(), this.props.book.title', this.props.book.title);
            console.log('BookDetail: render(), this.props.pages', this.props.book.pages);
            return (
                <div>
                    <h2>Details for: </h2>
                    <div>{this.props.book.title} <br />pages: {this.props.book.pages}</div>

                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    // will return props
    console.log('BookDetail: (connect) mapStateToProps() ', state);
    return ({
        book: state.activeBook,
    });
};

export default connect(mapStateToProps,null)(BookDetail);