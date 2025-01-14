import React from 'react';

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import Footer from './Footer';

import './SwipeButtons.css';

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <div>
        <IconButton className="swipeButtons__repeat">
          <ReplayIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__left">
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__star">
          <StarRateIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__right">
          <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__flash">
          <FlashOnIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default SwipeButtons;
