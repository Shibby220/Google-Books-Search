import React, {Component} from 'react';
import SearchForm from '../components/SearchForm';
import API from '../utils/API';

class Search extends Component {
  state = {
    searchTerm: "",
    books: []
  }

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({[name]: value});
  }

  handleSubmit = event => {
    event.preventDefault();

    if (!this.state.searchTerm) {
      return false;
    }

    API
      .searchGoogleBooks(this.state.searchTerm)
      .then(({data: {
          items
        }}) => {
        const books = items.map(book => {
          return {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            id: book.id,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
          }
        });

        this.setState({books});

      })
      .catch(err => console.log(err));
  }

  saveBook = bookId => {
    const selectedBook = this
      .state
      .books
      .find(({id}) => id === bookId);

    API
      .saveBook(selectedBook)
      .then(({data}) => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center">
          <h1 className="display-4">Google Books Search</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-3">
              <h3>Search For Books Here</h3>
              <SearchForm 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                value={this.state.searchTerm}
              />
            </div>
            <div className="col-12 col-md-9">
              <div className="row align-items-stretch">
                
                {!this.state.books.length ? 
                // eslint-disable-next-line 
                  (<h2></h2>) 
                  : 
                  this.state.books.map(book => {
                    return (
                      <div className="col-12 col-md-6" key={book.id}>
                        <div className="card">
                          <h5 className="card-header">{book.title}</h5>
                          <img src={book.image} alt={book.title} className="card-img"/>
                          <div className="card-body">
                            <h6 className="card-subtitle">By {book.authors.join(" & ")}</h6>
                            <p>{book.description}</p>
                            <div className="btn-group" role="group">
                              <button type="button" className="btn" onClick={() => this.saveBook(book.id)}>Save Book</button>
                              <a className="btn" href={book.link}>Go To Google Books</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;