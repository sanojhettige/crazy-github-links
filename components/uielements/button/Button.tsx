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
  isLoading?: boolean,
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
      isLoading = false,
      ...otherProps
    } : Props,
    ref
  ) => {

    return (
      <button disabled={disabled} onClick={onClick} className={`shadow ${type === 'primary' ? 'text-gray-100 bg-primary-500 hover:bg-primary-400 ' : type === 'secondary' ? 'text-white-100 bg-secondary-500 hover:bg-secondary-400 ' : type === 'transparent' ? 'transparent text-gray-900' : 'bg-white text-gray-900'} uppercase focus:shadow-outline focus:outline-none ${size === 'large' ? 'h-14 pr-6 pl-6 text-lg' : size === 'medium' ? 'h-10 pr-5 pl-5 text-md' : 'h-8 pr-4 pl-4 text-xs'} ${rounded && 'rounded'} ${fullwith && 'w-full'} ${className}`} type="button" {...otherProps}>
        <div className="flex items-center">
        {(prefixIcon || isLoading) && (<Iconography className={isLoading && `animate-spin`} size={size} icon={isLoading ? 'spinner' : prefixIcon} />)}
        <span className="text-center pl-2 w-full whitespace-nowrap">{children}</span>
        {suffixIcon && (<Iconography size={size} icon={prefixIcon} />)}
        </div>
        </button>
    );
  }
);

export default Button;
