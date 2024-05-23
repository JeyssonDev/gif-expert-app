import PropTypes from 'prop-types';

export const GifItem = ({ image }) => {
  return (
    <div className='card'>
      <img src={image.url} alt={image.title} />
      <p>{image.title}</p>
    </div>
  );
};

GifItem.propTypes = {
  image: PropTypes.object.isRequired,
};
