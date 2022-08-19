import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, tags }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img className={s.ImageGalleryItemImage} src={url} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
