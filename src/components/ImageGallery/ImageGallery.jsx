import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import api from 'helpers/api';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import Notification from 'components/Notification/Notification';

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
          page: 1,
        });
      } catch (error) {
        console.log(error.message);
      } finally {
        this.setState({ loading: false });
      }
    }

    if (prevState.page !== page && page !== 1) {
      try {
        this.setState({ loading: true });
        const data = await api(searchQuery, page);
        this.setState({
          photos: [...prevState.photos, ...data.hits],
        });
      } catch (error) {
        console.log(error.message);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { loading, photos, page } = this.state;
    return (
      <>
        {loading && <Loader />}
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
        {photos?.length === 0 && <Notification />}
        {photos?.length >= 12 && (
          <Button onBtnClick={this.getPageOnLoadMoreBtnClick} page={page} />
        )}
        <Modal />
      </>
    );
  }
}

export default ImageGallery;
