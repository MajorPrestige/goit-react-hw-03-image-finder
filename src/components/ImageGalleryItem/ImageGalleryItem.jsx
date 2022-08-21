import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, tags }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img className={s.ImageGalleryItemImage} src={url} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  tags: PropTypes.string,
};

export default ImageGalleryItem;
