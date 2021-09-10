import React from 'react';
import Iconography from '../Iconography';

interface Props {
  type?: 'primary' | 'secondary' |'transparent' | 'white',
  prefixIcon?: any,
  suffixIcon?: any,
  size?: 'large' | 'medium' | 'small',
  variant?: 'contained' | 'outlined',
  fullwith?: boolean,
  rounded?: boolean,
  children?: React.ReactNode;
  onClick?: (e) => void,
  id?: string,
  disabled?: boolean,
  className?: string,
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
      disabled,
      onClick,
      className,
      ...otherProps
    } : Props,
    ref
  ) => {

    return (
      <button disabled={disabled} onClick={onClick} className={`shadow bg-${type}-500 bg-${type} hover:bg-${type}-400 ${type === 'primary' ? 'text-gray-100' : type === 'secondary' ? 'text-white-100' : 'text-gray-900'} uppercase focus:shadow-outline focus:outline-none ${size === 'large' ? 'h-14 pr-6 pl-6 text-lg' : size === 'medium' ? 'h-10 pr-5 pl-5 text-md' : 'h-8 pr-4 pl-4 text-xs'} ${rounded && 'rounded'} ${fullwith && 'w-full'} ${className}`} type="button" {...otherProps}>
        <div className="flex items-center">
        {prefixIcon && (<Iconography size={size} icon={prefixIcon} />)}
        <span className="text-center pl-2 w-full whitespace-nowrap">{children}</span>
        {suffixIcon && (<Iconography size={size} icon={prefixIcon} />)}
        </div>
        </button>
    );
  }
);

export default Button;
