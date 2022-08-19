import React, { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import api from 'helpers/api';

class ImageGallery extends Component {
  state = {
    photos: null,
    loading: false,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { searchQuery } = this.props;

    if (prevProps.searchQuery !== searchQuery) {
      try {
        this.setState({ loading: true });
        const data = await api(searchQuery, page);
        this.setState({
          photos: data.hits,
          loading: false,
        });
      } catch (error) {
        this.setState({ loading: false });
        console.log(error.message);
      }
    }
  }

  render() {
    const { loading, photos } = this.state;
    return (
      <>
        {loading && <div>Loading...</div>}
        {photos && (
          <ul className={s.ImageGallery}>
            {photos.map(el => (
              <ImageGalleryItem
                key={el.id}
                url={el.webformatURL}
                tags={el.tags}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default ImageGallery;
