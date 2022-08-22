import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import s from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import FirstPage from './FirstPage/FirstPage';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  getSearchQuery = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <div className={s.App}>
        {!searchQuery && (
          <FirstPage
            getSearchQuery={this.getSearchQuery}
            searchQuery={searchQuery}
          />
        )}

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          pauseOnHover={false}
          draggable
        />

        {searchQuery && (
          <Searchbar
            getSearchQuery={this.getSearchQuery}
            searchQuery={searchQuery}
          />
        )}
        <ImageGallery searchQuery={searchQuery} />
      </div>
    );
  }
}
