interface Props {
    fullwith?: boolean,
    rounded?: boolean,
    onChange?: (e) => void,
    value?: string,
    options: option[],
  }
  
  interface option {
    id: string,
    title: any,
  }
  
  const Select = (
      {
      onChange,
      value,
      options,
      ...otherProps
    } : Props,) => {
    return (
      <select onChange={onChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        {options?.map(({id, title}) => <option key={`option-${id}`} value={id}>{title}</option>)}
      </select>
    )
  }
  
  export default Select;