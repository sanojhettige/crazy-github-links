import React from 'react';
import { faStar, faChevronDown, faHeart, faEye, faShare, faBars, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  icon?: any,
  size?: 'large' | 'medium' | 'small',
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
    default:
      return faStar;
  }
}

const Iconography = React.forwardRef(
  (
    {
      icon = 'start',
      size = 'medium',
    } : Props,
    ref
  ) => {

    return <FontAwesomeIcon className={`${size === 'large' ? 'w-5 h-5' : size === 'medium' ? 'w-4 h-4' : 'w-3 h-3'}`} icon={getIcon(icon)} />;
  }
);

export default Iconography;
