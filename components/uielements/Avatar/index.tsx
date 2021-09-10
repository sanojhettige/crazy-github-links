
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
        <img className={`inline-block h-20 w-20 ${rounded && 'rounded-full'} ring-2 ${!isTransparent && 'ring-white bg-white'}`} src={image} {...otherProps}/>
        </div>
  )
  }
  
  export default Avatar;
