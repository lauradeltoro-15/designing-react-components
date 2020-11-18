import React from 'react';

const SpeakerFavoriteButton = ({ isFavorite, onFavouriteToggle }) => {
  return (
    <div className={isFavorite ? 'heartredbutton' : 'heartdarkbutton'}
      onClick={onFavouriteToggle}
    ></div>
  );
};

export default SpeakerFavoriteButton;
