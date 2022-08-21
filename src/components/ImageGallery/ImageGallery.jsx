import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import api from 'helpers/api';
import Button from 'components/Button/Button';

class ImageGallery extends Component {
  static propTypes = {
    key: PropTypes.string,
  };

  state = {
    photos: null,
    loading: false,
    page: 1,
  };

  getPageOnLoadMoreBtnClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
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
          page: 1,
        });
      } catch (error) {
        this.setState({ loading: false });
        console.log(error.message);
      }
    }

    if (prevState.page !== page && page !== 1) {
      try {
        this.setState({ loading: true });
        const data = await api(searchQuery, page);
        this.setState({
          photos: [...prevState.photos, ...data.hits],
          loading: false,
        });
      } catch (error) {
        this.setState({ loading: false });
        console.log(error.message);
      }
    }
  }

  render() {
    const { loading, photos, page } = this.state;
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
        {photos?.length > 0 && (
          <Button onBtnClick={this.getPageOnLoadMoreBtnClick} page={page} />
        )}
      </>
    );
  }
}

export default ImageGallery;
