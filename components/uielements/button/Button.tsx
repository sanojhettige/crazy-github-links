/* eslint-disable no-nested-ternary */
import React from 'react';

interface Props {
  type?: 'primary' | 'secondary' |'transparent',
  prefixIcon?: string,
  suffixIcon?: string,
  size?: 'large' | 'medium' | 'small',
  variant?: 'contained' | 'outlined',
  fullwith?: boolean,
  rounded?: boolean,
  children?: React.ReactNode;
  onClick?: (e) => void,
}

const Button = React.forwardRef(
  (
    {
      type = 'primary',
      size = 'medium',
      children,
      variant = 'contained',
      prefixIcon,
      suffixIcon,
      rounded = true,
      fullwith,
      onClick,
      ...otherProps
    } : Props,
    ref
  ) => {

    return (
      <button onClick={onClick} className={`shadow bg-${type}-500 hover:bg-${type}-400 ${type === 'primary' ? 'text-gray-100' : type === 'secondary' ? 'text-gray-900' : 'text-gray-900'} uppercase focus:shadow-outline focus:outline-none ${size === 'large' ? 'pt-2 pb-2 pr-6 pl-6 text-lg' : size === 'medium' ? 'pt-1 pb-1 pr-5 pl-5 text-md' : 'pt-1 pb-1 pr-4 pl-4 text-xs'} ${rounded && 'rounded'} ${fullwith && 'w-full'}`} type="button">
        {prefixIcon && (<>ddd</>)}
        {children}
        {suffixIcon && (<>ddd</>)}
        </button>
    );
  }
);

export default Button;
