import axios from 'axios';

export default {
  getSavedBooks: function() {
    return axios.get('/api/book')
  },
  getBookById: function(bookId) {
    return axios.get(`/api/book/${bookId}`)
  },
  saveBook: function(bookData) {
    return axios.post('/api/book', bookData)
  },
  updateBook: function(bookId) {
    return axios.put(`/api/book/${bookId}`)
  },
  deleteBook: function(bookId) {
    return axios.delete(`/api/book/${bookId}`)
  },
  searchGoogleBooks: function(query) {
return axios.get('https://www.googleapis.com/books/v1/volumes', { params: {
  q: query
}})
  }
}