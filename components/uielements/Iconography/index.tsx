import React from 'react';
import { faStar, faChevronDown, faHeart, faEye, faShare, faBars, faAngleDoubleDown, faBookmark, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  icon?: any,
  size?: 'large' | 'medium' | 'small',
  className?: string,
}

const getIcon = icon => {
  switch (icon) {
    case 'star':
      return faStar;
    case 'down-arrow':
      return faChevronDown;
    case 'heart':
      return faHeart;
    case 'eye':
      return faEye;
    case 'share':
      return faShare;
    case 'bars':
      return faBars;
    case 'doubleDown':
      return faAngleDoubleDown;
    case 'bookmark':
      return faBookmark;
    case 'spinner':
      return faSpinner;
    default:
      return faStar;
  }
}

const Iconography = React.forwardRef(
  (
    {
      icon = 'start',
      size = 'medium',
      className,
    } : Props,
    ref
  ) => {

    return <FontAwesomeIcon className={`${size === 'large' ? 'w-5 h-5' : size === 'medium' ? 'w-4 h-4' : 'w-3 h-3'} ${className}`} icon={getIcon(icon)} />;
  }
);

export default Iconography;
