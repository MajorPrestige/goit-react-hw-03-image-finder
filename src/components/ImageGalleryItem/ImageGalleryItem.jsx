import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
    tags: PropTypes.string,
  };

  handleClick = ({ target }) => {
    this.props.getLargeImage(target.dataset.url);
  };

  render() {
    const { url, tags, largeImage } = this.props;
    return (
      <li className={s.ImageGalleryItem}>
        <img
          onClick={this.handleClick}
          className={s.ImageGalleryItemImage}
          data-url={largeImage}
          src={url}
          alt={tags}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
