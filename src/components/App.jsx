import React, { Component } from 'react';
import s from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

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
        <Searchbar getSearchQuery={this.getSearchQuery} />
        <ImageGallery searchQuery={searchQuery} />
      </div>
    );
  }
}
