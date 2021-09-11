
interface Props {
  size?: 'large' | 'medium' | 'samall',
  rounded?: boolean,
  image?: string,
  isTransparent?: boolean,
  alt?: string,
  title?: string,
  className?: string,
  }
  
  const Avatar = (
    {
    size = 'medium',
    isTransparent = false,
    image,
    rounded,
    ...otherProps
  } : Props,) => {
  return (
    <div className="w-full">
        <img className={`inline-block sm:h-15 sm:w-15 md-h-20 md:w-20 lg:h-20 lg:w-20 ${rounded && 'rounded-full'} ring-2 ${!isTransparent && 'ring-white bg-white'}`} src={image} {...otherProps}/>
        </div>
  )
  }
  
  export default Avatar;
