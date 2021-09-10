interface Props {
  type?: string,
size?: 'large' | 'medium' | 'samall',
fullwith?: boolean,
rounded?: boolean,
placeholder?: string,
onChange?: (e) => void,
value?: string,
className?: string,
readonly?: boolean,
ref?: any,
}

const TextField = (
  {
  type = 'primary',
  size = 'medium',
  placeholder,
  onChange,
  value,
  className,
  ...otherProps
} : Props,) => {
return (
  <input value={value} onChange={onChange} placeholder={placeholder} className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-github-50 ${className}`} type="text" {...otherProps} />
)
}

export default TextField;